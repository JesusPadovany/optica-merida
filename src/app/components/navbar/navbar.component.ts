import { Component, OnDestroy, OnInit } from '@angular/core';
import { Carrito, User } from 'src/app/models';
import { CarritoService } from '../../services/carrito.service'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  user: User;
  logIn: boolean = true;
  car: Carrito[];
  shoppingCar:any;
  subscription: any;

  subscriptionLogin:any;

  constructor(
    private carritoService: CarritoService,
    private authService:AuthService
  ) { 
    this.shoppingCar = 0;

    this.subscription = this.carritoService.getChangeEmitter()
    .subscribe(item => this.setNumber(item));

  }
  

  ngOnInit() {

    this.getUserLocalStorage();
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setNumber(cant: number){
    this.shoppingCar = cant;
  }

  getUserLocalStorage() {
    
    //Consultar usuario
    this.user = {
      id_:2,
      nombres: "Maria",
      apellidos: "Lopez",
      username:"mlopez",
      password:"1234",
      email:"maria@gmail.com",
      telefono:"0412-1234567"
    }

    /*Obtener datos del usuario del localstorage*/
    // let currentUser = this.srvAuthService.getCurrentUser();
    // this.user = JSON.parse(currentUser);

    if(this.user != undefined){
      this.logIn=false;
    }

  }
}
