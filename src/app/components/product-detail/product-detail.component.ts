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
      idtipo_lente: 2,
      idmarca: 3,
      cantidad_total: 10,
      foto: "product-1.jpg",
      descripcion: "Lentes A",
      precio: "40",
      codigo: "12361",
      tipo:"De sol",
      marca:"Rayband"
    },
    this.consult();
  }

  consult(){};

  add(){
    console.log("añadido al carrito");
  }

}
