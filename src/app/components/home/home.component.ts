import { Component, OnInit } from '@angular/core';

import { User, RolModelo, Inventario } from '../../models';
import { UserLocalStorageService, AuthService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService, UserLocalStorageService]
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  products: Inventario[];
  user: User={};

  constructor(private srvAuthService: AuthService) { 
  }

  ngOnInit() {

    // let currentUser = this.srvAuthService.getCurrentUser();
    // this.user = JSON.parse(currentUser);

    /* Se obtine todos los roles del usuario de sesion */
    
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];  

    this.products = [
      {
        id_: 1,
        idinventario: 1,
        idtipo_lente: 1,
        idmarca:1,
        descripcion: "Lentes A",
        cantidad_total: "40",
        codigo: "12361",
        foto: "product-1.jpg",
        precio: "200",
      },
      {
        id_: 1,
        idinventario: 1,
        idtipo_lente: 1,
        idmarca:1,
        descripcion: "Lentes B",
        cantidad_total: "40",
        codigo: "12361",
        foto: "product-2.jpg",
        precio: "200",
      },
      {
        id_: 1,
        idinventario: 1,
        idtipo_lente: 1,
        idmarca:1,
        descripcion: "Lentes C",
        cantidad_total: "40",
        codigo: "12361",
        foto: "product-3.jpg",
        precio: "200",
      },
      {
        id_: 1,
        idinventario: 1,
        idtipo_lente: 1,
        idmarca:1,
        descripcion: "Lentes D",
        cantidad_total: "40",
        codigo: "12361",
        foto: "product-4.jpg",
        precio: "200",
      },
      {
        id_: 1,
        idinventario: 1,
        idtipo_lente: 1,
        idmarca:1,
        descripcion: "Lentes E",
        cantidad_total: "40",
        codigo: "12361",
        foto: "product-5.jpg",
        precio: "200",
      },
      
    ]
  }
  

}
