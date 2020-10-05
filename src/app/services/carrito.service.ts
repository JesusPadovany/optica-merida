import { Injectable } from '@angular/core';
import { Inventario } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  shoppingCar: Inventario[]= [];

  constructor() 
  {
    this.setCarrito(this.shoppingCar);
  }

  public setCarrito( car: any){
    localStorage.setItem('carritoCompras', JSON.stringify(car));
  }

  public removeCarrito(){
    localStorage.removeItem('carritoCompras');
  }

  public getCarrito(){
    return localStorage.getItem('carritoCompras');
  }

  public addCarrito( car: any){
    let aux = this.getCarrito();
    this.shoppingCar = JSON.parse(aux);
    this.shoppingCar.push(car);
    this.setCarrito(this.shoppingCar);
  }

}
