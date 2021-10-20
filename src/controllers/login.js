import jwt from "jsonwebtoken"
import findUser from "../helpers/findUser.js"
import 'dotenv/config';

const loginHandler = (req, res) => {
  const body = req.body;
  const {username, password} = body;
  console.log(body, username, password)

  if(findUser(username, password)) {
    const token = jwt.sign({}, process.env.MY_SECRET_KEY);
    res.send({
      token,
    });
  } else {
    res.status(401).send({
      token: null,
    });
  }
}

export default loginHandler;