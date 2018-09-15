const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//Activity Model
const Activity = require('../models/activities');


router.get('/', (req, res, next) => {
  Activity.find()
  .then((activitiesList, err) => {
    console.log(activitiesList)
    if (err) {
      res.json(err);
      return;
    }
    res.json(activitiesList);
  })
  .catch(error => next(error));
});


module.exports = router;