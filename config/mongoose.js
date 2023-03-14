const mongoose =require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://Hrithik:Hrithik1995@cluster0.h4n9ic3.mongodb.net/Hospital-Api-Db?retryWrites=true&w=majority');
// mongoose.connect('mongodb://0.0.0.0:27017/hospital_api');

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to the database :("));

db.once('open',function(){
    console.log("Successfully connected to the database :)");
});


module.exports=db;