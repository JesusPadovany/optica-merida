import { Component, OnInit } from '@angular/core';
import { Carrito, Inventario } from 'src/app/models';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  product: Carrito[];
  total: number= 0;

  constructor() { }

  ngOnInit() {

    this.product = [
  
      {
        id_: 1,
        img: "product-3.jpg",
        description: "Lentes C",
        price: "90",
        brand:"Vogue"
      },
      {
        id_: 1,
       
        img: "product-4.jpg",
        description: "Lentes D",
        price: "100",
        brand:"Tom Ford"
      },
     
      
    ]

    this.total_pagar();
    
  }

  total_pagar(){
    this.product.forEach(element => {
      this.total +=  parseInt (element.price);
    });
  }

  remove(product : Carrito){

    //Se elimina ese reg 

    //Se vuelve a consultar el carrito del usuario
  }
}
