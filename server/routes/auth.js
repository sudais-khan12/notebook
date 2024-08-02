const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/",
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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send("done");
  }
);

module.exports = router;
