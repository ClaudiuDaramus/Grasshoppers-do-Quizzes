const jwt = require('jsonwebtoken')
const db = require('../models')
const appJwt = require('../config/jwt')
const { verify } = require('../crypt/hash')

//Takes an email a password and returns a jwt : {email, password}
async function login(_, { email, password }) {
    return new Promise(async (resolve, reject) => {
        const user = await db.User.findOne({ where: { email } })
        if(!user || !verify(password, user.password))
        {
            reject("Password incorrect")
            return
        }
        jwt.sign(
            { id: user.id },
            appJwt.MY_SECRET_KEY,
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