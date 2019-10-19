var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var mongo = require('mongodb');
var assert = require('assert');
var fs = require('fs');

mongoose.Promise = global.Promise;

//const mongoURI ="mongodb://testboy:rhino94@ds155396.mlab.com:55396/rest";
const mongoURI ="mongodb://localhost:27017/bookstore";
const options = {
    keepAlive: true,
    keepAliveInitialDelay:300000,
    useNewUrlParser: true,
    useUnifiedTopology: true 
};

const genre = require('./models/genre');

const Book = require('./models/book');
var port = 8000;
//Connect to Mongoose
mongoose.connect(mongoURI,options);

// mongoose.connection.on('connected', ()=>{  
//     console.log('Mongoose default connection open to ' + mongoURI);
// });

// //If the connection throws an error
// mongoose.connection.on('error',(err)=>{
//     console.log('handle mongo errored connections: ' + err);
// });

// //When the connection is disconnected
// mongoose.connection.on('disconnected', ()=>{
//     console.log('Mongoose default connection disconnected');
// });

// process.on('SIGINT', ()=>{
//     mongoose.connection.close(()=>{
//         console.log('App terminated, closing mongo connectionse');
//         process.exit(0);
//     })
// })

    var gen = new genre({
        name: "mikel"
    });
    gen.save();
    
    genre.find({})
    .exec()
    .then(genres => {
        console.log(genres);
    })
    .catch(err => {
        console.log(err);
})

//Handling a get request.
app.get('/',function(req,res){
    res.send('Medal is given to everybody');
});




app.get('/api/genres', function(req,res){
    //Genre.getGenres();
//   var resultArray = [];
//   mongo.connect(mongoURI, function(err, client) {
//     assert.equal(null, err);
//     var db = client.db('bookstore');
//     var cursor = db.collection('genre').find();
//     cursor.forEach(function(doc, err) {
//       assert.equal(null, err);
//       resultArray.push(doc);
//     }, function() {
//       db.close
//       //fs.writeFile('test.json',JSON.stringify(resultArray[0],null,4),function(err){
//           //if(err){
//               //console.log(err);
//           //}else{
//               res.json(resultArray);//
//           //}
//       //});
//       //res.json(resultArray);
//     });
//   });
    //res.send('What is happening with the code');
    genre.find({})
    .exec()
    .then(genres => {
        console.log(genres);
    })
    .catch(err => {
        console.log(err);
    })
});

/*
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});*/

app.get('/api/books',function(req,res){
    Book.getBooks(function(err,books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id',function(req,res){
    Book.getBook(req.params._id,function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(port,function(){
    console.log(`running on port ${port}`);
});
