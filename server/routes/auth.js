const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // check if the user already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      // create a new user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          });
          res.json(user);
        });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
