var express = require('express');

var app = express();

app.get('/', function(req, res) {
        res.send("Hellod world!");
    }
)

app.listen(8000, function(){
    console.log('Our first web server')
})