const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var router = require('./routes');
var path = require('path');
// Initial Configuration
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: false}));




app.use('/',router);


app.listen(3000, () => console.log('Example app listening on port 3000!'));
