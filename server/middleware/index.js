const jwt = require("jsonwebtoken");

const secretKey = "secret123";

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    next();
  });
};

module.exports = { authenticateToken };
