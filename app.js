var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoURI ="mongodb://testboy:rhino94@ds155396.mlab.com:55396/rest";
const options = {
    keepAlive: true,
    keepAliveInitialDelay:300000,
    useNewUrlParser: true,
    useUnifiedTopology: true 
};


//Connect to Mongoose
mongoose.connect(mongoURI,options);

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose default connection open to ' + mongoURI);
});

//If the connection throws an error
mongoose.connection.on('error',(err)=>{
    console.log('handle mongo errored connections: ' + err);
});

//When the connection is disconnected
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
        console.log('App terminated, closing mongo connectionse');
        process.exit(0);
    })
})


//Handling a get request.
app.get('/',function(req,res){
    res.send('Medal is given to everybody');
});


app.listen(3000);
console.log('Running on port 3000');