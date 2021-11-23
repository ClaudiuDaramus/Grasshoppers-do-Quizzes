const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/express');
const authorizationMiddleware = require('./middlewares/authorization');
const loginHandler = require('./controllers/login');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./controllers/users');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql');

const app = express();
app.use(bodyParser.json());

app.post("/login", loginHandler);

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/user/:id", deleteUser);


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