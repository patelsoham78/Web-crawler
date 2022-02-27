const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello World');
})

const port = 3000;
const server = app.listen(port, () => {
    console.log("Server is running.......");
});

module.exports = app;