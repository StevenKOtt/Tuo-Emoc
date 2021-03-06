const mongoose = require('mongoose');

const closetedInSchema = new mongoose.Schema({

  user: {type: String, required: true },
  subject: {type: String, required: true },
  body: {type: String, required: true },
  comments: [{ body: String, user: String, commentDate: Date }]
},
{ timestamps: { createdAt: 'created_at' }});

const closetedIn = mongoose.model('closeted_In', closetedInSchema);

module.exports = closetedIn;

