const express = require('express');
const mongoose = require('mongoose');
const Potato = require('../models/Potato');

const router = express.Router();

/* GET ALL POTATOES */
router.get('/', function(req, res, next) {
  Potato.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Potato.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POTATOES */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE POTATOES */
router.put('/:id', function(req, res, next) {
  Potato.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POTATOES */
router.delete('/:id', function(req, res, next) {
  Potato.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
