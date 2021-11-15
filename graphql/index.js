const {
  GraphQLSchema,
} = require('graphql');

const queryType = require('./queryType');
const mutationType = require('./mutationType');
console.log(require('./mutations'))

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = schema;