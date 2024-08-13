const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "alliswell";
const fetchUser = require("../middleware/fetchUser");

// Create Route

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3, max: 15 }),
    body(
      "password",
      "Password must be at least 8 characters and contain at least one uppercase letter, one number, and one special character"
    )
      .isLength({ min: 8 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ),
    body("email", "Enter a valid email").isEmail(),
  ],

  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      // check if the user already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({ success, error: "User already exists" });
      }

      // create a new user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          });

          const data = {
            user: {
              id: user.id,
            },
          };

          let token = jwt.sign(data, JWT_SECRET);
          success = true;
          res.json({ success, token });
        });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Login Route

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      let token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Get user data

router.post("/getuser", fetchUser, async (req, res) => {
  let success = false;
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({
          success,
          error: "Please try to login with correct credentials",
        });
    }

    res.send(user);
    success = true;
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// logout route

router.post("/logout", async (req, res) => {
  let success = false;
  try {
    success = false;
    jwt.sign("", JWT_SECRET);
    res.json({ success, message: "Logged out successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
