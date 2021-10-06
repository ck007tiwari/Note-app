const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path');
const Note = require('./models/note');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({
   extended: true
}));
app.use(methodOverride('_method'))
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/note-app', {
      useNewUrlParser: true,
   })
   .then(() => {
      console.log('Connection ON with MONGO');
   })
   .catch(err => {
      console.log('SOmething is not good (error)');
      console.log(err);
   })

app.get('/', (req, res) => {
   res.render('home')
})
app.get('/new', (req, res) => {
   res.render('new')
})
app.get('/notes', async (req, res) => {
   const notes = await Note.find({});
   // console.log(notes)
   // res.send('all products will be here')
   res.render('details', {
      notes
   }); // here we are sending students  value to " details/details " this location where we can access them.
});
app.get('/notes/:id', async (req, res) => {
   const {
      id
   } = req.params
   const note = await Note.findById(id); //Find by id
   // console.log(note);
   // res.send('Viewing on note')
   res.render('oneNote', {
      note
   });
})
//*********************POST DATA*********************** */
app.post('/notes', async (req, res) => {
   const newnote = new Note(req.body)
   const data = await newnote.save();
   // console.log(details); 
   // console.log(newnote); 
   // console.log(data); 
   // res.send('adding data')
   res.redirect('/notes');
})
app.delete('/notes/:id', async (req, res) => {
   const {
      id
   } = req.params;
   await Note.findByIdAndDelete(id);
   res.redirect('/notes');
})

app.listen(2000, () => {
   console.log("Lisining @ 2000 Port");
})