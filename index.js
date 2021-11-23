const express = require('express');
const { port } = require('./config/express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql');

const app = express();


app.use("/graphql", graphqlHTTP((req, res, params) => {
  return {  
    schema,
    context: {},
    graphiql: true,
  }
}));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});