// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res)=>{
//     res.send("I am in Nigeria")
// })
// app.listen(port, ()=>{
//     console.log(`Sever listening on port ${port}`);
// })

// app.get("/example", (req, res) => {
//   res.send("Hitting example route");
// });


// Using params
// app.get('/example/:name/:age', (req, res)=>{
//     console.log((req.params));
//     console.log(req.query)
//     res.send(req.params.name + ':' + req.params.age);
// })

// SERVING STATIC FILES
const express = require("express");
const bodyParser = require('body-parser');
const Joi = require('joi')
const path = require('path');
const app = express();
const port = 3000;

const people = require('./routes/people')

//app.use('/public',express.static(path.join(__dirname, 'static')) )
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/', people)

app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});

// app.post('/', (req, res)=>{
//     console.log(req.body)
// // Database work here
//    const Schema = Joi.object({
//        email: Joi.string().trim().email().trim().required(),
//        password: Joi.string().min(5).max(10).required()
//    });

//    Schema.validate(req.body,(err, result)=>{
//        if(err){
//          res.send("An error has occoured");
//          console.log(err)
//        }
//        console.log(result)
//        res.render('index');
//    })
// })

