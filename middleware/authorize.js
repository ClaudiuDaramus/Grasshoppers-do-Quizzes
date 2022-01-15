const jwt = require('jsonwebtoken')
const db = require('../models')
const config = require('../config/jwt')
async function authorize(req, res, next) {
  const header = req.get("Authorization")
  if (!header) {
    console.log("No user or token")
    next()
    return
  }
  try {
    const token = header.split(" ")[1]
    jwt.verify(token, config.MY_SECRET_KEY, { algorithms: ["HS512"] }, async (err, token) => {
      if (err) {
        res.status(401)
        return
      }
      console.log(`Token id = ${token.id}`)
      const user = await db.User.findByPk(token.id)
      if (!user) {
        res.status(401)
        return
      }
      req.user = user;
      next()
    })
  } catch (e) {
    next()
  }
}

module.exports = authorize