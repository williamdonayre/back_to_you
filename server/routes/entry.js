const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//User Model
const User = require('../models/user');
//Entry Model
const Entry    = require('../models/entry');

//Route to view all entries
router.get('/', (req, res, next) => {
  Entry.find()
  .then((entriesList, err) => {
    console.log(entriesList);
    if (err) {
      res.json(err);
      return;
    }
    res.json(entriesList);
  })
  .catch(error => next(error));
});

//Route to create entry
router.post('/new-entry', (req, res, next) =>{
  // userId = User.Id;
  console.log("DID IT WORkkkkkkK" + req.session);
  const theEntry = new Entry ({
     dateCreated: req.body.dateCreated,
     userId: req.session.passport.user,    
     emotion:req.body.emotion,
     activities: req.body.activities,
     comment: req.body.comment
       });


  // Save new entry to DB
    theEntry.save()
    .then(response => {
      console.log("suuuuuuuuuuuuuuup mah dude",response)
   
      res.json({
          message:'Entry created! We hope to optimize your mood',
        id: theEntry._id
      });
    })
  
    .catch(error => next(error))  
  });
 
//Route to view a single entry
router.get('/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.findById(req.params.id)
  .then(theEntry => {
      res.json(theEntry);
  })
  .catch(error => next(error));
});

//Route to edit entry
router.put('/:id/edit', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
     dateCreated: req.body.dateCreated,      
     emotion:req.body.emotion,
     activity: req.body.activities,
     comment: req.body.comment
  };
  console.log('REQQQQQQQQQQQQ.BOD' + req.body);
  Entry.findByIdAndUpdate(req.params.id, updates)
  .then(entry => {
    res.json({
      message: 'Entry updated successfully'
    });
  }) 
  .catch(error => next(error));     
}) 


//Route to delete entry
router.delete('/:id/delete', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Entry.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'Entry has been deleted!'
    });
  })
  .catch(error => next(error));
});

module.exports = router;

