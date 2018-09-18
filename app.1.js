var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});