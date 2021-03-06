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

/* GET SINGLE POTATO BY ID */
router.get('potato/:id', function(req, res, next) {
  Potato.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POTATO */
router.post('/potato', function(req, res, next) {
  console.log('saving potato');
  Potato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE POTATO */
router.put('potato/:id', function(req, res, next) {
  Potato.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POTATO */
router.delete('potato/:id', function(req, res, next) {
  Potato.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
