const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs")

// EXPRESS SPECIFIC STUFF
//for serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

//ENDPOINTS
app.get('/',(req,res)=>{
    const con = 'This is the best content on the interest so far so use it wisely';
    const params= {'title': 'PUBG is the best', 'content': con}
  res.status(200).render('index.pug', params);
})

app.post('/',(req, res)=>{
   name = req.body.name
   age = req.body.age
   gender = req.body.gender
   address = req.body.address
   more = req.body.more

   let outputtowrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}, more ${more}`
   fs.writeFileSync('output.txt', outputtowrite)

  const params= {'message': 'submitted successfuly'}
  res.status(200).render('index.pug', params);
})



app.listen(port, ()=>{
    console.log(`This application started successfuly on port ${port}`);
})

