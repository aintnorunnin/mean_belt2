import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
// import { User } from "./user";
// import { Question } from "./question";
// import { Games } from "./games";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class DbService {

  constructor(private http: Http) { }

  //check to see if user logged in
  logged(){
    console.log("thats great")
    return this.http.get('/logged').map( data => data.json()).toPromise();
  }

  //login in user
  login(user){
    return this.http.post('/login', user).map( data => data.json()).toPromise();
  }


  //grab products
  getProducts(){
    return this.http.get('/getProducts').map( data => data.json()).toPromise();
  }

  //Create Bids
  createBids(bidds){
    return this.http.post('/createBids', bidds).map( data => data.json()).toPromise();
  }


}
