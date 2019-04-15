const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const path = require('path')

const insults = ['cool', 'awesome', 'fantastic']

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/', function(req, res){
    let band = req.body.band_name
    if(band === undefined){
        res.send('The name you submitted is not correct.')
    }
    else{
        res.send(band + ' is ' + insults[Math.floor(insults.length * Math.random())])
    }
})



app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})