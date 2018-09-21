const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
//User Model
const User    = require('../models/user.js');
//Route to view user profile
router.get('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
}

  User.findById(req.params.id)
  .then(user=>  {res.status(200).json(user)})
  .catch (err => {res.status(500).json(err)})
});

//Route to edit profile - render profile editing page
router.put('/:id/edit', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
}
const updates = {
  name,
  username,
  location
} = req.body;

console.log('REQQQQQQQQQQQQ.BOD' + req.body);
User.findByIdAndUpdate(req.params.id, updates, err =>{
  if (err) {
    console.log('LOOOOOOOOOOOK' + err);
    res.json(err);
     return;
  }
console.log('SUCCESS' + updates);
  res.json({
    message: "User updated successfully."
  });
});
});

//Route to delete profile
router.delete('/:id/delete', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.remove({ _id: req.params.id })
  .then(message => {
    return res.json({
      message: 'User Profile has been deleted!'
    });
  })
  .catch(error => next(error))
});

module.exports = router;