import { Component, OnInit } from '@angular/core';
import { Carrito, Inventario } from 'src/app/models';
import { UserLocalStorageService, AuthService, CarritoService  } from '../../services';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  product: Inventario[];
  total: number= 0;

  constructor(
    private carritoService: CarritoService,
  ) { }

  ngOnInit() {

    this.getCarLocalStorage();
    this.total_pagar();
  }

  getCarLocalStorage() {
    let carrito = this.carritoService.getCarrito();
    this.product = JSON.parse(carrito);
  }

  total_pagar(){
    this.product.forEach(element => {
      this.total +=  parseInt (element.precio);
    });
  }

  // remove(product : Carrito){
    
  //   this.total_pagar();
  // }
}
