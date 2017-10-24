const express = require('express')
const app = express();
const path = require('path');
const PORT = 8000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(session({secret: "really really secret"}));
mongoose.Promise = global.Promise

//Use bodyparser so that it can read json, set path directory for views
app.use(bodyParser.json());
app.set('views',path.join(__dirname, './client/views'));
app.use(express.static(path.join(__dirname, './public/dist')));

// require the mongoose configuration file: connects mongoose and grabs models
require('./server/config/mongoose.js');

// invoke the function returned from routes.js and pass to it EXPRESS
require('./server/config/routes.js')(app);

//set up server to listen to PORT
const server = app.listen(PORT, function(){
  console.log("Listening to Port", PORT)
})
