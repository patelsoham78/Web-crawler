const express = require('express');
const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.use(express.json());  //body parser

app.get('/',(req,res) => {
    res.send('Hello World');
})

const URL = "https://www.flipkart.com/search?q=mobiles";
// console.log('hello');
// const getData = async () => {
//         const data = await axios.get(URL);
//         console.log(data);
//         console.log('hello');
// }

request(URL, function(err,res,body){
    if(err)
    {
        console.log(err,"error occured");
    }
    else
    {
        let $ = cheerio.load(body);

        const arr = [];
        $('div._2kHMtA').each(function(index){
            const link = $(this).find('a._1fQZEK').attr('href');
            const name = $(this).find('div._4rR01T').text();
            const obj = {
                name: name,
                data: link
            }
            arr.push(obj);
        });
        console.log(arr);

    }
});

const port = 3000;
const server = app.listen(port, () => {
    console.log("Server is running.......");
});





module.exports = app;