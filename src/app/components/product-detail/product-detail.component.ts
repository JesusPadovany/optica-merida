import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventario } from 'src/app/models';
import { UserLocalStorageService, CarritoService, InventarioService  } from '../../services';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [MessageService]
})
export class ProductDetailComponent implements OnInit {

  product: any={};
  id: any;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private messageService: MessageService,
    private inventarioService: InventarioService,
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    /*Get producto*/
    this.getProductById();
    
  }

  getProductById() {
    
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
    }

    //Petición promise
    //  this.inventarioService.getById(this.id)
    // .toPromise()
    // .then(results => { 
    //   this.product = results;
    // })
    // .catch( err => { 
    //   console.log(err);
    // });
  }

  addShoppingCar(product: Inventario){
    
    this.carritoService.addCarrito(product);
    this.showMessage("Producto agregado al carrito");

  }

  private showMessage(msg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'success', summary: msg });
  }

}
