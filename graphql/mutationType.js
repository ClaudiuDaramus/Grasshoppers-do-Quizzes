const {
    GraphQLObjectType,
} = require('graphql');
const mutations = require('./mutations')
const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
    
})

module.exports = mutationType;