const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const registerInputType = new GraphQLInputObjectType({
  name: 'RegisterInput',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

module.exports = registerInputType;