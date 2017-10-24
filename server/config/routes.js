const mongoose = require('mongoose')
const user = require("../controllers/control.js")
const path = require('path')

module.exports = function(app){
  //Login user
  app.post('/login', user.login);
  
  //Logout
  app.get('/logout', user.logout);

  //Login user
  app.get('/logged', user.logged);

  //Get all Products
  app.get('/getProducts', user.getProducts);

  //Create Bids
  app.post('/createBids', user.createBids);

  // //Get all users
  // // app.get('/getGamesProto', user.getGamesProto);
  //
  // //Get all questions
  // app.get('/getQuestions', user.getQuestions);
  //
  // //create a new question
  // app.post('/addQuestion', user.addQuestion);
  //
  // //create a new question
  // app.post('/addGame', user.addGame);
  //
  // //Logout
  // app.get('/logout', user.logout);



  app.all("*", (request,response,next) => {
    response.sendFile(path.resolve("./public/dist/index.html"))
  });
};
