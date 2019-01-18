const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3333;

app.use(express.static(path.resolve(__dirname + '/../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, err => {
  if (err) { return console.log('Cannot connect to server.', err); }
  console.log(`Listening on http://localhost:${port}`);
});