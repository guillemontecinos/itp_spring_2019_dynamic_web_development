const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const path = require('path')

const insults = ['cool', 'awesome', 'fantastic']

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    let webUrl = req.query.web_url
    if(webUrl === undefined){
        res.sendFile(path.join(__dirname + '/index.html'))
    }
    else{
        // res.send(httpRequest(webUrl))
        // console.log(httpRequest(webUrl))
        res.type('.html')
        httpRequest(webUrl, res)
    }
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

function httpRequest(webUrl, res){
    const https = require('https');

    const options = {
        hostname: webUrl,
        port: 443,
        path: '/',
        method: 'GET'
    };

    const request = https.request(options, (resp) => {
        console.log('statusCode:', resp.statusCode);
        console.log('headers:', resp.headers);

        resp.on('data', (d) => {
            res.send(d.toString())
        });
    });

    request.on('error', (e) => {
        console.error(e);
        });
    
    request.end()
}