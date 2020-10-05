import { Component, OnInit } from '@angular/core';
import { Carrito, User } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  logIn: boolean = true;
  car: Carrito[];

  constructor() { }

  ngOnInit() {

    //Consultar usuario
    this.user = {
      id_:2,
      first_name: "Maria",
      last_name: "Lopez",
      username:"mlopez",
      password:"1234",
      email:"maria@gmail.com",
      phone:"0412-1234567"
    }

    //Consultar sus items en el carrito
    this.car = [
      {
        id_:1,
        id_user:2,
        id_stock:3
      },
      {
        id_:2,
        id_user:2,
        id_stock:4
      }
    ] 

    if(this.user != undefined){
      this.logIn=false;
    }
  
  }

}
