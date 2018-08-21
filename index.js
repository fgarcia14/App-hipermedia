var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo!');
});

const PORT=process.env.PORT || 4000;

app.listen(4000, function () {
  console.log('Escuchando en el puerto 4000');
});