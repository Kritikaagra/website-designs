// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kritika', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  //console.log("We are connected.")
  // we're connected!
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = "My name is " + this.name
  //console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);
//from a colllection of plural form of argument

const kritikakitty = new Kitten({ name: 'kritikakitty' });
//console.log(kritikakitty.name); // 'Silence'
//kritikakitty.speak();

kritikakitty.save(function (err, kritikakitty) {
  if (err) return console.error(err);
 // kritikakitty.speak();
});

Kitten.find({name: "kritikakitty"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})