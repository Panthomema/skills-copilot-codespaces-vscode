// Create web server
// npm install express
// npm install body-parser

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];

app.get('/comments', function(req, res) {
    console.log('GET comments');
    res.json(comments);
});

app.post('/comments', function(req, res) {
    console.log('POST comments');
    var comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});