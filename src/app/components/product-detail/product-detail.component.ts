import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any={};
  id: any;
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.product = {
      id_: 1,
      id_lensType: 2,
      id_brand: 3,
      quantity: 10,
      img: "product-1.jpg",
      description: "Lentes A",
      price: "40",
      code: "12361",
      type:"De sol",
      brand:"Rayband"
    },
    this.consult();
  }

  consult(){};

  add(){
    console.log("añadido al carrito");
  }

}
