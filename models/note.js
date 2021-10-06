const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      min: 5,
   },
   description: {
      type: String,
      required: true,
      min: 10
   }
})

const Note = mongoose.model('Note', noteSchema); //Note is our mongo collection name and noteschema define data type and validation
module.exports = Note;