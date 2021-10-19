import 'dotenv/config';
import handleGreetings from './greetings.js';
import handleDogFacts from './dogFacts.js';
import cors from 'cors';
import express from 'express';


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, node.js!');
})

app.get('/hello/:name?', handleGreetings)

app.get('/dog-facts/', handleDogFacts)

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
})