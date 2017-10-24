const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create User Schema for
var UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
}, {timestamps: true });
//Store Schema in mongoose.model
mongoose.model("User", UserSchema)

//Create bid Schema
var BidSchema = new mongoose.Schema({
  bidder: {type:String},
  amount: {type:Number},
}, {timestamps: true });
//Store Schema in mongoose.model
mongoose.model("Bid", BidSchema)


//Schema for Products
var ProductSchema = new mongoose.Schema({
  name: {type:String, required:true},
  bids:[{type:Schema.Types.ObjectId, ref:"Bid"}],
}, {timestamps: true });
//Store Schema in mongoose.model
mongoose.model("Product", ProductSchema)
