import jwt from "jsonwebtoken";
import cofig from "./config";

const getToken = user => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    },
    cofig.JWT_SECRET,
    {
      expiresIn: "48h"
    }
  );
};

export { getToken };
