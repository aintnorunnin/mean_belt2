import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { Product } from "./../product";
import { Bid } from "./../bid";
import { DbService } from "./../db.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: Array<any>
  username: string
  max0 = new Bid;
  max1 = new Bid;
  max2 = new Bid;
  bids0: Array<any>
  bids1: Array<any>
  bids2: Array<any>

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.username=''
    this.db.logged()
    .then(name => {this.username=name})
    .catch(err => {console.log("oh no", err)})

    this.products = [];
    this.db.getProducts()
    .then((products) => {this.products = products;
      //find the highest bidder for each product

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
      //product 1
      for(var b=0; b < this.bids1.length; b++){
        if(this.bids1[b].amount > this.max1.amount){
          this.max1.bidder = this.bids1[b].bidder
          this.max1.amount = this.bids1[b].amount
        }
      }
      //product 2
      for(var c=0; c < this.bids2.length; c++){
        if(this.bids2[c].amount > this.max2.amount){
          this.max2.bidder = this.bids2[c].bidder
          this.max2.amount = this.bids2[c].amount
        }
      }
    })
    .catch(err => {console.log("couldn't grab products",err)})
  }

  startBid(){
    this.router.navigate(["bids"])
  }

}
