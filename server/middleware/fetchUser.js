var jwt = require("jsonwebtoken");
const JWT_SECRET = "alliswell";

const fetchUser = (req, res, next) => {
  // Get the user from the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
  try {
    // If there's a prefix (like Bearer), ensure you handle it correctly
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
