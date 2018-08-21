let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo!!");
})

let PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log('Servidor escuchando en puerto 4000');
});