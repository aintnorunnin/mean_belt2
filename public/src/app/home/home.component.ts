import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { Router } from '@angular/router';
import { DbService } from "./../db.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
  }

  signIn(name){
    this.db.login({name:this.user.name})
    .then(() => {this.router.navigate(["result"])})  
    .catch(err => {console.log('something happened',err)})
  }
}
