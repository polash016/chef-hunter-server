const express = require('express');
const app = express();
const port = 5000;

const data = require('./data/data.json');

app.get('/', (req, res) => {
    res.send("Server Is Running")
})
app.listen(port, ()=>{
    console.log(`Server Running on Port: ${port}`)
})