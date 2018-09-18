const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();
//Funcion y se manda el parametro app para invocarla

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]  
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function(){
    console.log("Servidor escuchando en el puerto 4000");
});
