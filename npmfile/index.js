const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send("I am in Nigeria")
})
app.listen(port, ()=>{
    console.log(`Sever listening on port ${port}`);
})

app.get("/example", (req, res) => {
  res.send("Hitting example route");
});

app.get('/example/:name/:age', (req, res)=>{
    console.log((req.params));
    res.send(req.params.name + ':' + req.params.age);
})

