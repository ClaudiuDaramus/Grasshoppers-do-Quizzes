import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authorizationMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("authorization",authorization)
  if(authorization) {
    try {
      const decoded = jwt.verify(authorization.replace('Bearer ', ''), process.env.MY_SECRET_KEY);
      next();
    } catch (e) {
      res.send({
        error: "Invalid token"
      });
    }
  }
}

export default authorizationMiddleware;