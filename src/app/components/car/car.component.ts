import { Component, OnInit } from '@angular/core';
import { Carrito, Inventario, Compra } from 'src/app/models';
import { UserLocalStorageService, AuthService, CarritoService, CompraService  } from '../../services';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [AuthService, UserLocalStorageService,MessageService]

})
export class CarComponent implements OnInit {

  product: Inventario[];
  total: number= 0;

  constructor(
    private srvAuthService: AuthService,
    private carritoService: CarritoService,
    private compraService: CompraService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {

    /*Obtener datos del usuario del localstorage*/
    // let currentUser = this.srvAuthService.getCurrentUser();
    // this.user = JSON.parse(currentUser);
    
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

  comprar(){

    // this.compraService.create()
    // .toPromise()
    // .then(results => { 
    //   this.showSuccess('La compra se ha realizado exitosamente, su envio está en camino');
    // })
    // .catch( err => { 
    //   this.showError('Ha ocurrido un error');
    //   console.log(err);
    // });

  }

  private showError(msg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'error', summary: msg });
  }

  private showSuccess(msg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'success', summary: msg });
  }

}
