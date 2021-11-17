const { verify } = require('../crypt/hash')
const jwt = require('jsonwebtoken')
const db = require('../models')

function authorize(req) {
    return new Promise((async (resolve, reject) => {
        const header = req.get("Authorization")
        if (!header) {
            resolve(null)
            return
        }
        const token = header.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, { algorithms: ["HS512"] }, async (err, token) => {
            if (err) {
                reject(err.message)
                return
            }
            const user = await db.User.findOne({ where: { email: token.email } })
            if (!user) {
                resolve(null)
                return
            }
            if (!verify(token.password, user.password)) {
                resolve(null)
                return
            }
            resolve(user.id)
        })
    }))

}

module.exports = authorize