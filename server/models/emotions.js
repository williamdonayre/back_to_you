
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
  image: String,
})




const Emotion = mongoose.model('Emotion', userSchema);
module.exports = Emotion;