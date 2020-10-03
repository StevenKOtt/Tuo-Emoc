const mongoose = require('mongoose');

const comingoutSchema = new mongoose.Schema({

  user: {type: String, required: true },
  subject: {type: String, required: true },
  body: {type: String, required: true },
  comments: [{ body: String, user: String, commentDate: Date }]
},
{ timestamps: { createdAt: 'created_at' }});

const comingOut = mongoose.model('Coming_Out', comingoutSchema);

module.exports = comingOut;


