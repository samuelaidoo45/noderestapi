var mongoose = require('mongoose');

//Schema for Genre
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    create_date:{
        type:Date,
        default: Date.now
    }
});

var genre = mongoose.model('genre',genreSchema);

//Get Genresss
//module.exports.getGenres = function(callback,limit){
    //Genre.find(callback).limit(limit);
//}
module.exports = genre;