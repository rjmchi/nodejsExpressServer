const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


const server = app.listen(port, () =>{
    console.log('listening...');
});