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
        id_lensType: 2,
        id_brand: 3,
        quantity: 10,
        img: "",
        description: "product-1.jpg",
        price: "40",
        code: "12361"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 5,
        img: "",
        description: "product-2.jpg",
        price: "90",
        code: "12361"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 20,
        img: "",
        description: "product-3.jpg",
        price: "90",
        code: "12361"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 40,
        quantity: 10,
        img: "",
        description: "product-4.jpg",
        price: "100",
        code: "12361"
      },
      {
        id_: 1,
        id_lensType: 2,
        id_brand: 3,
        quantity: 10,
        img: "",
        description: "product-5.jpg",
        price: "30",
        code: "12361"
      }
      
    ]
  }
  

}
