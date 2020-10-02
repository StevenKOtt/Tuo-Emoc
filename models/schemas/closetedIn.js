const mongoose = require('mongoose');

const closetedInSchema = new mongoose.Schema({

  user: {type: String, required: true },
  subject: {type: String, required: true },
  body: {type: String, required: true },
  comments: {type: Number, default: 0 },
  identity: {type: String, required: true },
  age: {type: Number, required: false}
},
{ timestamps: { createdAt: 'created_at' }});

const closetedIn = mongoose.model('closeted_In', closetedInSchema);

module.exports = closetedIn;

