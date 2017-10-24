const mongoose = require('mongoose')
const Users = mongoose.model("User")
const Products = mongoose.model("Product")
const Bids = mongoose.model("Bid")


module.exports = {
  // Create and login in user
  login : function(req, res){
    let new_user = new Users(req.body)
    req.session.username = new_user.name
    new_user.save()
        .then(() => res.json(true))
    },

    //Logout
    logout:function(req,res){
      req.session.destroy()
      res.redirect('/')
    },

    //Check to see if user logged in
    logged:function(req,res){
      if(req.session.username){
        res.json(req.session.username)
      }else{
        res.json()
      }
    },

    //Retrieve all games
    getProducts: function(req,res){
      Products.find({}).populate("bids").exec()
      .then(products => {
        res.json(products)
      })
      .catch( err => console.log("couldnt get products"))
    },

    //Create a new Bid
    createBids : function(req, res){
      let bid0 = new Bids(req.body.bidds0)
      bid0.save(function(err){
        Products.find({}).populate("bids").exec()
        .then(products => {
          products[0].bids.push(bid0)
          products[0].save()
        })
        .catch( err => console.log("couldnt get products"))
      })

      let bid1 = new Bids(req.body.bidds1)
      bid1.save(function(err){
        Products.find({}).populate("bids").exec()
        .then(products => {
          products[1].bids.push(bid1)
          products[1].save()
        })
        .catch( err => console.log("couldnt get products"))
      })

      let bid2 = new Bids(req.body.bidds2)
      bid2.save(function(err){
        Products.find({}).populate("bids").exec()
        .then(products => {
          products[2].bids.push(bid2)
          products[2].save()
        })
        .catch( err => console.log("couldnt get products"))
      })
      res.json(true)
    },

  //   // //Retrieve all gamesProto
  //   // getGamesProto: function(req,res){
  //   //   res.json(games)
  //   // },
  //
  //   //Retrieve all users
  //   getQuestions: function(req,res){
  //     Questions.find({}).populate("answer").exec()
  //     .then(questions => {
  //       res.json(questions)
  //     })
  //     .catch( err => console.log("couldnt get questions"))
  //   },


  //
  //   addGame: function(req, res){
  //     let new_game = new Games(req.body)
  //     console.log(req.body.percentage)
  //     new_game.player = req.session.user.name
  //     new_game.save(function(err){
  //       if(err){
  //         console.log("couldn't add game, oh now")
  //       }else{
  //         res.json(req.session.user.name)
  //       }
  //     })
  //   },
  //

};
