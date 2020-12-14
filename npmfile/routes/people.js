const express = require('express');
const route = express.Router();

route.get('/', (req, res)=>{
    res.send("Router is currently being hit")
})

route.use((req, res, next)=>{
  console.log("Middleware is being used")
  next();
})
route.get("/example", (req, res) => {
  res.send("The example Router is on hit");
});

module.exports = route;