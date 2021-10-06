const express = require('express');
const app = express();
const port = 3000;
const name = "Node.js";

app.get('/', (req, res) => {
  res.send('Hello World, ' + name + '!');
})

// app.get('/hello', function (req, res) {
//   res.send('Hello World, ' + name + '!');
// })

app.get('/hello/:name?', function (req, res) {
  if(req.params.name) {
    const message = 'Hello World, ' + req.params.name + '!';
    res.send(message);
  } else {
    res.send('Hello World');
  }
  
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})