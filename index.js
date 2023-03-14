const express= require('express');
const app= express();
// app.use(express.json());

const port= 8000;
const passport=require('passport');
const db=require('./config/mongoose');

const passportJWT=require('./config/passport.jwt.strategy');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/',require('./routes/index'));



app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("server is running on port: ", port);
})