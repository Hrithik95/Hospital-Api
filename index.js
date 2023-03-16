// const express= require('express');
// const app= express();
// // app.use(express.json());

// const port= 8000;
// const passport=require('passport');
// const db=require('./config/mongoose');

// const passportJWT=require('./config/passport.jwt.strategy');

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use('/',require('./routes/api/index'));



// app.listen(port,function(err){
//     if(err){ console.log("error in starting server"); return;}
//     console.log("server is running on port: ", port);
// })

const express = require('express');

const passport = require('./config/passport.jwt.strategy');

const db = require('./config/mongoose');
//imported necessary files and executed config files

const port = 8000;
//specified a port number

const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded());
//urlencoded to decode the data send by forms

app.use(express.json());
// json to decode the data send in form of json

app.use(passport.initialize());
//initialized passport

app.use('/',require('./routes/api/index'));
//create routing for api

app.listen(port,function(err){
    if(err){
        console.log("Error while listening", err);
    }
    else{
        console.log("Listening!!!");
    }

});
//executed listen function