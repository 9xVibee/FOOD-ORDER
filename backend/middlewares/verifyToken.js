import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({
      message: "Not authorized , Login First",
    });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE, (err, data) => {
      if (err)
        return res.status(401).json({ message: "Wrong or expired token" });
      else {
        req.user = data;
        next();
      }
    });
  }
};

export const verifyTokenAdmin = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({
      message: "Not authorized , Login First",
    });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE, (err, data) => {
      if (err)
        return res.status(401).json({ message: "Wrong or expired token" });
      else {
        if (!data.isAdmin)
          return res.status(403).jsom({ msg: "You are not a admin" });
        req.user = data;
        next();
      }
    });
  }
};
