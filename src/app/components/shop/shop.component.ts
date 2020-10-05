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

  registros:Inventario[] = [
    {
      id_: 1,
      idinventario:2,
      idtipo_lente:3,
      idmarca:4,
      cantidad_total: 10,
      foto: "product-1.jpg",
      descripcion: "Lentes A",
      precio: "40",
      codigo: "12361",
      tipo_lente:"De sol",
      marca:"Rayband"
    },
  
    {
      id_: 1,
      idinventario:2,
      idtipo_lente:3,
      idmarca:4,
      cantidad_total: 10,
      foto: "product-2.jpg",
      descripcion: "Lentes B",
      precio: "40",
      codigo: "12361",
      tipo_lente:"De sol",
      marca:"Dior"
    },
    {
      id_: 1,
      idinventario:2,
      idtipo_lente:3,
      idmarca:4,
      cantidad_total: 10,
      foto: "product-3.jpg",
      descripcion: "Lentes C",
      precio: "40",
      codigo: "12361",
      tipo_lente:"Formulados",
      marca:"Vogue"
    },
    {
      id_: 1,
      idinventario:2,
      idtipo_lente:3,
      idmarca:4,
      cantidad_total: 10,
      foto: "product-1.jpg",
      descripcion: "Lentes D",
      precio: "40",
      codigo: "12361",
      tipo_lente:"Formulados",
      marca:"Tom Ford"
    },
    {
      id_: 1,
      idinventario:2,
      idtipo_lente:3,
      idmarca:4,
      cantidad_total: 10,
      foto: "product-1.jpg",
      descripcion: "Lentes E",
      precio: "40",
      codigo: "12361",
      tipo_lente:"De contacto",
      marca:"Timberland"
    },
    
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
        tipo_lente:"De sol",
      },
      {
        id_:1,
        tipo_lente:"Formulados",
      },
      {
        id_:1,
        tipo_lente:"De contacto",
      }
    ]

    this.brands=[
      {
        id_:1,
        nombre_marca:"Rayband",
      },
      {
        id_:2,
        nombre_marca:"Dior",
      },
      {
        id_:3,
        nombre_marca:"Vogue",
      },
      {
        id_:4,
        nombre_marca:"Tom Ford",
      },
      {
        id_:5,
        nombre_marca:"Timberland",
      },
      {
        id_:6,
        nombre_marca:"Hugo Boss",
      },
      {
        id_:7,
        nombre_marca:"Fleshlook",
      },
      {
        id_:8,
        nombre_marca:"Acuvue",
      }
    ]
    
    this.product = [
      {
        id_: 1,
        idinventario:2,
        idtipo_lente:3,
        idmarca:4,
        cantidad_total: 10,
        foto: "product-1.jpg",
        descripcion: "Lentes A",
        precio: "40",
        codigo: "12361",
        tipo_lente:"De sol",
        marca:"Rayband"
      },
    
      {
        id_: 1,
        idinventario:2,
        idtipo_lente:3,
        idmarca:4,
        cantidad_total: 10,
        foto: "product-2.jpg",
        descripcion: "Lentes B",
        precio: "40",
        codigo: "12361",
        tipo_lente:"De sol",
        marca:"Dior"
      },
      {
        id_: 1,
        idinventario:2,
        idtipo_lente:3,
        idmarca:4,
        cantidad_total: 10,
        foto: "product-3.jpg",
        descripcion: "Lentes C",
        precio: "40",
        codigo: "12361",
        tipo_lente:"Formulados",
        marca:"Vogue"
      },
      {
        id_: 1,
        idinventario:2,
        idtipo_lente:3,
        idmarca:4,
        cantidad_total: 10,
        foto: "product-1.jpg",
        descripcion: "Lentes D",
        precio: "40",
        codigo: "12361",
        tipo_lente:"Formulados",
        marca:"Tom Ford"
      },
      {
        id_: 1,
        idinventario:2,
        idtipo_lente:3,
        idmarca:4,
        cantidad_total: 10,
        foto: "product-1.jpg",
        descripcion: "Lentes E",
        precio: "40",
        codigo: "12361",
        tipo_lente:"De contacto",
        marca:"Timberland"
      },
      
    ]

    this.total= this.product.length;
  }


  add(){

  }

  detail(product: Inventario){
    this.router.navigate(['product-detail', product.id_]);
  }

  filterByBrand(brand: any){
    
    let result = this.registros.filter(x => x.marca == brand);
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
    
    let result = this.registros.filter(x => x.tipo_lente == tipo);
    this.product = result;
    this.total= this.product.length;
    this.title= tipo;

  }


}
