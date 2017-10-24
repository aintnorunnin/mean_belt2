import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { Product } from "./../product";
import { Bid } from "./../bid";
import { DbService } from "./../db.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  username:string;
  products:Array<any>;
  bid0 = new Bid;
  bid1 = new Bid;
  bid2 = new Bid;
  amount0 :number;
  amount1 :number;
  amount2 :number;
  max0 = new Bid;
  max1 = new Bid;
  max2 = new Bid;
  bids0: Array<any>
  bids1: Array<any>
  bids2: Array<any>


  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    //grab username
    this.username=''
    this.db.logged()
    .then(name => {this.username=name})
    .catch(err => {console.log("oh no", err)})
    //grab products
    this.products = [];
    this.db.getProducts()
    .then((products) => {this.products = products;
      this.bids0 = this.products[0].bids;
      this.bids1 = this.products[1].bids;
      this.bids2 = this.products[2].bids;
      this.max0.amount = 0;
      this.max1.amount = 0;
      this.max2.amount = 0;
      //product 0
      for(var a=0; a < this.bids0.length; a++){
        if(this.bids0[a].amount > this.max0.amount){
          this.max0.bidder = this.bids0[a].bidder
          this.max0.amount = this.bids0[a].amount
        }
      }
      this.max0.amount++
      //product 1
      for(var b=0; b < this.bids1.length; b++){
        if(this.bids1[b].amount > this.max1.amount){
          this.max1.bidder = this.bids1[b].bidder
          this.max1.amount = this.bids1[b].amount
        }
      }
      this.max1.amount++
      //product 2
      for(var c=0; c < this.bids2.length; c++){
        if(this.bids2[c].amount > this.max2.amount){
          this.max2.bidder = this.bids2[c].bidder
          this.max2.amount = this.bids2[c].amount
        }
      }
      this.max2.amount++
    })
    .catch(err => {console.log("couldn't grab products",err)})
  }

  bid(){
    this.bid0.bidder = this.username
    this.bid1.bidder = this.username
    this.bid2.bidder = this.username
    this.bid0.amount = this.amount0
    this.bid1.amount = this.amount1
    this.bid2.amount = this.amount2
    this.db.createBids({bidds0:this.bid0, bidds1:this.bid1, bidds2:this.bid2,})
    .then(() =>{this.router.navigate(['result'])})
    .catch((error) =>{console.log("oh crap what happened", error)})
  }
}
