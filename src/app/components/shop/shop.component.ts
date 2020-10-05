import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario';
import { Marca } from 'src/app/models/marca';
import { TipoLente } from 'src/app/models/tipo-lente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  registros:Inventario[]= [
    {
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
    {
      id_: 1,
      id_lensType: 2,
      id_brand: 3,
      quantity: 5,
      img: "product-2.jpg",
      description: "Lentes B",
      price: "90",
      code: "12361",
      type:"De sol",
      brand:"Dior"
    },
    {
      id_: 1,
      id_lensType: 2,
      id_brand: 3,
      quantity: 20,
      img: "product-3.jpg",
      description: "Lentes C",
      price: "90",
      code: "12361",
      type:"De sol",
      brand:"Vogue"
    },
    {
      id_: 1,
      id_lensType: 2,
      id_brand: 40,
      quantity: 10,
      img: "product-4.jpg",
      description: "Lentes D",
      price: "100",
      code: "12361",
      type:"Formulados",
      brand:"Tom Ford"
    },
    {
      id_: 1,
      id_lensType: 2,
      id_brand: 3,
      quantity: 10,
      img: "product-5.jpg",
      description: "Lentes E",
      price: "30",
      code: "12361",
      type:"De contacto",
      brand:"Timberland"
    }
    
  ]

  product: Inventario[];
  brands: Marca[];
  total:any;
  types: TipoLente[];
  title:any;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  
    this.types = [
      {
        id_:1,
        type:"De sol",
      },
      {
        id_:1,
        type:"Formulados",
      },
      {
        id_:1,
        type:"De contacto",
      }
    ]

    this.brands=[
      {
        id_:1,
        brand_name:"Rayband",
      },
      {
        id_:2,
        brand_name:"Dior",
      },
      {
        id_:3,
        brand_name:"Vogue",
      },
      {
        id_:4,
        brand_name:"Tom Ford",
      },
      {
        id_:5,
        brand_name:"Timberland",
      },
      {
        id_:6,
        brand_name:"Hugo Boss",
      },
      {
        id_:7,
        brand_name:"Fleshlook",
      },
      {
        id_:8,
        brand_name:"Acuvue",
      }
    ]
    
    this.product = [
      {
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
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 5,
        img: "product-2.jpg",
        description: "Lentes B",
        price: "90",
        code: "12361",
        type:"De sol",
        brand:"Dior"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 20,
        img: "product-3.jpg",
        description: "Lentes C",
        price: "90",
        code: "12361",
        type:"De sol",
        brand:"Vogue"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 40,
        quantity: 10,
        img: "product-4.jpg",
        description: "Lentes D",
        price: "100",
        code: "12361",
        type:"Formulados",
        brand:"Tom Ford"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 10,
        img: "product-5.jpg",
        description: "Lentes E",
        price: "30",
        code: "12361",
        type:"De contacto",
        brand:"Timberland"
      }
      
    ]

    this.total= this.product.length;
  }


  add(){

  }

  detail(product: Inventario){
    this.router.navigate(['product-detail', product.id_]);
  }

  filterByBrand(brand: any){
    
    let result = this.registros.filter(x => x.brand == brand);
    this.product = result;
    this.total= this.product.length;
    this.title= brand;

  }

  all(){

    this.product = this.registros;
    this.total= this.product.length;
    this.title="";

  }

  filterByType(tipo: any){
    
    let result = this.registros.filter(x => x.type == tipo);
    this.product = result;
    this.total= this.product.length;
    this.title= tipo;

  }


}
