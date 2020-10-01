const mongoose = require('mongoose');

const comingoutSchema = new mongoose.Schema({

  user: {type: String, required: true },
  subject: {type: String, required: true },
  body: {type: String, required: true },
  identity: {type: String, required: true },
  age: {type: Number, required: false}, 
  date_submitted: {type: Date, required: true },

});

const comingOut = mongoose.model('Coming_Out', comingoutSchema);

module.exports = comingOut;


