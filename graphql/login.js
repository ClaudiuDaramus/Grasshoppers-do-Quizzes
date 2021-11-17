const jwt = require('jsonwebtoken')
const db = require('../models')
const { verify } = require('../crypt/hash')

//Takes an email a password and returns a jwt : {email, password}
async function login(_, { email, password }) {
    return new Promise(async (resolve, reject) => {
        const user = await db.User.findOne({ where: { email } })
        if(!verify(password, user.password))
        {
            reject("Password incorrect")
        }
        jwt.sign(
            { email, password },
            process.env.JWT_SECRET,
            { algorithm: "HS512" },
            (err, token) => {
                if (err) {
                    reject()
                }
                //Unorthodox but cleaner
                user.token = token
                resolve(user)
            })
    })

}

module.exports = login