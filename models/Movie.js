var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
   //  _id: mongoose.Schema.Types.ObjectId,
    title: String,
    year: {type:Date,default:Date.now},
    duration: {type:Number},
    genre:[],
    director:String,
    plot:String,
    contry:String,
    imdbRating:{type:Number, min:0, max:10}

});

module.exports = mongoose.model('Movie', movieSchema);
