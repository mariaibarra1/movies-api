var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Movie = require('../models/Movie.js')
/* GET movies listing. */
router.get('/', function(req, res, next) {
 // res.send('get all movies');

 Movie.find().sort('-year').exec(function(err,movies){
  if(err) res.status(500).send(err);
  else res.status(200).json(movies)
 })
});

/* GET the movies  identified by id  */
router.get('/:id', function(req, res, next) {
  // res.send('get the movie' + req.params.id );.

  Movie.findById(req.params.id, function(err,movieinfo){
    if(err) res.status(500).send(err);
    else res.status(200).json(movieinfo)
  })
});

/* POST the movies  identified by id  */
router.post('/', function(req, res, next) {
 //  res.send('post the movie with title ' + req.body  );

    Movie.create(req.body,function(err,movieinfo){
 
      if(err) res.status(500).send(err);
      else res.sendStatus(200);
    });
});


/* put the movies  identified by id  */
router.put('/:id', function(req, res, next) {
 // res.send('put the movie ' + req.params.id );

 Movie.findByIdAndUpdate(req.params.id,req.body,function(err,movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200)
 })
});

/* delete the movies  identified by id  */
router.delete('/:id', function(req, res, next) {
  // res.send('delete the movie ' + req.params.id );

  Movie.findByIdAndDelete(req.params.id,function(err,movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  })
});


module.exports = router;
