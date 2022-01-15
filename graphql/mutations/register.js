const { GraphQLString, GraphQLNonNull } = require('graphql')
const { hash } = require('../../crypt/hash')
const db = require('../../models')
const userType = require('../types/userType')
const registerInputType = require('../inputTypes/registerInputType')
module.exports = {
  register: {
    type: userType,
    args: {
      registerInput: {type: registerInputType },
    },
    resolve: async (_, {registerInput: {password, ...input}} ) => {
      const pass = await hash(password)
      //console.log(`Hashed password is`)
      return await db.User.create({ ...input, password: pass })
    }
  }
}