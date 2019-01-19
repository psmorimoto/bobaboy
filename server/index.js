const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./controllers/routes.js');

const port = 3333;

app.use(express.static(path.resolve(__dirname + '/../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/orders/:name', router.createOrder);
app.get('/orders/:name', router.getOrders);
app.put('/orders/:name', router.updateOrder);
app.delete('/orders/:name', router.deleteOrder);

app.listen(port, err => { 
  if (err) { throw err; }
  console.log(`Listening on http://localhost:${port}`);
});