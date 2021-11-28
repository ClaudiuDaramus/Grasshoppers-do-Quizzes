
const express = require('express');
const { port } = require('./config/express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql');
const authorize = require('./graphql/authorize')

const app = express();
app.use(express.json())

app.use("/graphql", authorize, graphqlHTTP(async (req, res, params) => {
    return {
        schema,
        graphiql: true,
    }

}))

app.listen(port, () => {
    console.log(`Make queries at http://localhost:${port}/graphql`)
})