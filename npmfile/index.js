const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send("I am in Nigeria")
})
app.listen(port, ()=>{
    console.log(`Sever listening on port ${port}`);
})