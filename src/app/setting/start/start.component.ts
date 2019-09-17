import { Component, OnInit } from '@angular/core';
import { Z_BEST_SPEED } from 'zlib';
import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  userName =``;
  password = ``;

  constructor() { }

  ngOnInit() {
   // console.log(this.userName+` password -`+this.password);

  }
  registeredUser(){
    let {userName,password} = this;
   
    if(userName==`ssss` && password == `ssss`){
       console.log(userName+` password -`+password);
    }

}


}
