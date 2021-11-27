const { verify } = require('../crypt/hash')
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
        console.log("No user, token error")
        next()
        return
      }
      console.log(`Token id = ${token.id}`)
      const user = await db.User.findByPk(token.id)
      if (!user) {
        console.log("No user")
        next()
        return
      }
      req.user = user;
      console.log(`userId = ${user.id}`)
      next()
    })
  } catch (e) {
    next()
  }
}

module.exports = authorize