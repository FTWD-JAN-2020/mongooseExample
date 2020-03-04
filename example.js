const mongoose = require('mongoose');
const Cat = require('./models/Cat')

mongoose
  .connect('mongodb://localhost/nameOfTheDatabase', { //when deploying replace this with an online url from Atlas.  
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


Cat.create({
    color:'blue'
})
  
mongoose.connection.close();
 
// Cat.remove({}).then(res => {
//     console.log(':(')
// })



// Cat.remove({color:'blue'}).then(res => console.log(res))

// Cat.update({name:"Garfield"}, {color: 'Orange'}).then(res => console.log(res))

// Cat.findOne({color:"Orange"}).then(garfield => {
//     console.log(garfield)
//     garfield.age = 40; 
//     garfield.save()
// })