var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type:String,
        required: true
    },
    description:{
    },
    author:{
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
     pages:{
         type: String
     },

     image_url:{
         type: String
     }, 
     buy_url:{
         type: String
     },
     create_date:{
         type: Date,
         default: Date.now
     }

});

var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books
module.exports = Book;