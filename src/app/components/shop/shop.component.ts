import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/models/inventario';
import { Marca } from 'src/app/models/marca';
import { TipoLente } from 'src/app/models/tipo-lente';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { 
  UserLocalStorageService, 
  AuthService, 
  CarritoService,   
  MarcaService,
  TipoLenteService,
  InventarioService
} from '../../services';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [MessageService]
})
export class ShopComponent implements OnInit {

  registros:Inventario[] = []
  
  // [
  //   {
  //     id_: 1,
  //     idinventario:2,
  //     idtipo_lente:3,
  //     marca:4,
  //     cantidad_total: 10,
  //     foto: "product-1.jpg",
  //     descripcion: "Lentes A",
  //     precio: "10",
  //     codigo: "12361",
  //     tipo_lente:"De sol",
  //     marca:"Rayband"
  //   },
  
  //   {
  //     id_: 1,
  //     idinventario:2,
  //     idtipo_lente:3,
  //     marca:4,
  //     cantidad_total: 10,
  //     foto: "product-2.jpg",
  //     descripcion: "Lentes B",
  //     precio: "30",
  //     codigo: "12361",
  //     tipo_lente:"De sol",
  //     marca:"Dior"
  //   },
  //   {
  //     id_: 1,
  //     idinventario:2,
  //     idtipo_lente:3,
  //     marca:4,
  //     cantidad_total: 10,
  //     foto: "product-3.jpg",
  //     descripcion: "Lentes C",
  //     precio: "40",
  //     codigo: "12361",
  //     tipo_lente:"Formulados",
  //     marca:"Vogue"
  //   },
  //   {
  //     id_: 1,
  //     idinventario:2,
  //     idtipo_lente:3,
  //     marca:4,
  //     cantidad_total: 10,
  //     foto: "product-4.jpg",
  //     descripcion: "Lentes D",
  //     precio: "50",
  //     codigo: "12361",
  //     tipo_lente:"Formulados",
  //     marca:"Tom Ford"
  //   },
  //   {
  //     id_: 1,
  //     idinventario:2,
  //     idtipo_lente:3,
  //     marca:4,
  //     cantidad_total: 10,
  //     foto: "product-5.jpg",
  //     descripcion: "Lentes E",
  //     precio: "40",
  //     codigo: "12361",
  //     tipo_lente:"De contacto",
  //     marca:"Timberland"
  //   },
    
  // ]

  product: Inventario[];
  brands: Marca[];
  total:any;
  types: TipoLente[];
  title:any;

  constructor(
    private router: Router,
    private carritoService: CarritoService,
    private messageService: MessageService,
    private tipoLenteService: TipoLenteService,
    private marcaService: MarcaService,
    private inventarioService: InventarioService,
  ) { }

  ngOnInit() {
  
    // Obtener todos los tipos de lentes registrados
    this.getAllTypeOfLens();
   
    // Obtener todas las marcas de lentes registrados
    this.getAllBrands();
    
    //Obtener todos los regisros del stock donde cantidad_total sea >0
    this.getAllStock();
  
  }

  getAllStock() {

    this.inventarioService.getAll().subscribe( (data) => {
      this.registros = this.product = data
      this.total = data.length
    } )
    // this.product =  [
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     idtipo_lente:3,
    //     marca:4,
    //     cantidad_total: 10,
    //     foto: "product-1.jpg",
    //     descripcion: "Lentes A",
    //     precio: "10",
    //     codigo: "12361",
    //     tipo_lente:"De sol",
    //     marca:"Rayband"
    //   },
    
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     idtipo_lente:3,
    //     marca:4,
    //     cantidad_total: 10,
    //     foto: "product-2.jpg",
    //     descripcion: "Lentes B",
    //     precio: "30",
    //     codigo: "12361",
    //     tipo_lente:"De sol",
    //     marca:"Dior"
    //   },
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     idtipo_lente:3,
    //     marca:4,
    //     cantidad_total: 10,
    //     foto: "product-3.jpg",
    //     descripcion: "Lentes C",
    //     precio: "40",
    //     codigo: "12361",
    //     tipo_lente:"Formulados",
    //     marca:"Vogue"
    //   },
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     idtipo_lente:3,
    //     marca:4,
    //     cantidad_total: 10,
    //     foto: "product-4.jpg",
    //     descripcion: "Lentes D",
    //     precio: "50",
    //     codigo: "12361",
    //     tipo_lente:"Formulados",
    //     marca:"Tom Ford"
    //   },
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     idtipo_lente:3,
    //     marca:4,
    //     cantidad_total: 10,
    //     foto: "product-5.jpg",
    //     descripcion: "Lentes E",
    //     precio: "40",
    //     codigo: "12361",
    //     tipo_lente:"De contacto",
    //     marca:"Timberland"
    //   },
      
    // ]

    // this.total= this.product.length;

    //Peticion promise
    // this.inventarioService.getAll()
    // .toPromise()
    // .then(results => { 
    //   this.product= results;
    // })
    // .catch( err => { 
    //   console.log(err);
    // });
  }

  getAllBrands() {
  
    this.marcaService.getAll().subscribe( (data) => this.brands = data )
    // this.brands=[
    //   {
    //     id_:1,
    //     nombre_marca:"Rayband",
    //   },
    //   {
    //     id_:2,
    //     nombre_marca:"Dior",
    //   },
    //   {
    //     id_:3,
    //     nombre_marca:"Vogue",
    //   },
    //   {
    //     id_:4,
    //     nombre_marca:"Tom Ford",
    //   },
    //   {
    //     id_:5,
    //     nombre_marca:"Timberland",
    //   },
    //   {
    //     id_:6,
    //     nombre_marca:"Hugo Boss",
    //   },
    //   {
    //     id_:7,
    //     nombre_marca:"Fleshlook",
    //   },
    //   {
    //     id_:8,
    //     nombre_marca:"Acuvue",
    //   }
    // ]

    //Peticion promise
    // this.marcaService.getAll()
    // .toPromise()
    // .then(results => { 
    //   this.brands= results;
    // })
    // .catch( err => { 
    //   console.log(err);
    // });
  }

  getAllTypeOfLens() {

    this.tipoLenteService.getAll().subscribe( (data) => this.types = data )
    // this.types = [
    //   {
    //     id_:1,
    //     tipo_lente:"De sol",
    //   },
    //   {
    //     id_:1,
    //     tipo_lente:"Formulados",
    //   },
    //   {
    //     id_:1,
    //     tipo_lente:"De contacto",
    //   }
    // ]

    //Peticion promise
    // this.tipoLenteService.getAll()
    // .toPromise()
    // .then(results => { 
    //   this.types= results;
    // })
    // .catch( err => { 
    //   console.log(err);
    // });
  }


  //Filtros
  all(){

    this.product = this.registros;
    this.total= this.product.length;
    this.title="";

  }

  filterByBrand(brand: any){
    
    let result = this.registros.filter(x => x.marca == brand);
    this.product = result;
    this.total= this.product.length;
    this.title= brand;

  }

 
  filterByType(tipo: any){
    
    let result = this.registros.filter(x => x.tipo_lente == tipo);
    this.product = result;
    this.total= this.product.length;
    this.title= tipo;

  }

  //Otros
  addShoppingCar(product: Inventario){
    
    this.carritoService.addCarrito(product);
    this.showMessage("Producto agregado al carrito");
    
  }

  
  detail(product: Inventario){
    this.router.navigate(['product-detail', product.id]);
  }

  
  private showMessage(msg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'success', summary: msg });
  }

}
