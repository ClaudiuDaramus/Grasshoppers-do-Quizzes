import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import handleGreetings from './controllers/greetings.js';
import handleDogFacts from './controllers/dogFacts.js';
import loginHandler from './controllers/login.js';
import authorizationMiddleware from './middlewares/authorization.js';

const app = express();

app.use(bodyParser.json());

app.post("/login", loginHandler);

app.get('/', (req, res) => {
  res.send('Hello, node.js!');
})

app.get("/hello", authorizationMiddleware, handleGreetings);

app.get("/hello/:name?", authorizationMiddleware, handleGreetings);

app.get('/dog-facts/', authorizationMiddleware, handleDogFacts)

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
})