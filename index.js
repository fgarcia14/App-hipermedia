let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send({bye: 'budy', prueba: 'HelloWorld!'});
})

let PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log('Servidor escuchando en puerto 4000');
});