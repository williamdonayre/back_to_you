const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//Emotion Model
const Emotion = require('../models/emotions');


router.get('/', (req, res, next) => {
  Emotion.find()
  .then((emotionsList, err) => {
    console.log(emotionsList)
    if (err) {
      res.json(err);
      return;
    }
    res.json(emotionsList);
  })
  .catch(error => next(error));
});

module.exports = router;