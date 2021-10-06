const mongoose = require('mongoose');
const Note = require('./models/note');


   mongoose.connect('mongodb://localhost:27017/note-app', {      useNewUrlParser: true,   })
   .then(() => {
      console.log('Connection ON with MONGO');   
   })   
   .catch(err => { 
      console.log('SOmething is not good (error)');    
      console.log(err);   
   })
//adding startup data
   const notedetails = [
      {
         title: 'sarojini nagar market',
         description:'good place to buy  cloths, shirts, t-shirts, trousers '
      },
      {
         title: 'Delhi gate',
         description:'good place to buy secound-hand books- wings of fire, chanakya niti, bhootnath by dharamveer bharti'
      },
      {
         title: 'Sani market',
         description:' also know as sabji market, fresh vegetables'
      },
      {
         title: 'chandni chowk',
         description:'chandni chowk> lajpat nagar famous for electrical equipment,and  lighting'
      },
     
   ];

   Note.insertMany(notedetails)
   .then(res =>{
      console.log(res);
   })
   .catch(e=>{
      console.log(e);
   })