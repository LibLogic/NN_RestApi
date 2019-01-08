const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.use(bodyParser.json());
// connect to mongodb
const url = 'mongodb://hdgknsn:lino7196@ds151864.mlab.com:51864/ninjas';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('okay');
});