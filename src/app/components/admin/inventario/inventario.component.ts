import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InventarioService } from '../../../services/inventario.service';
import { MarcaService } from '../../../services/marca.service';
import { TipoLenteService } from '../../../services/tipo-lente.service';
import { Inventario } from 'src/app/models/inventario';
import { Marca, TipoLente } from 'src/app/models';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [ConfirmationService, MessageService, InventarioService]

})
export class InventarioComponent implements OnInit {

  myForm: FormGroup;
  newProduct: boolean;
  displayDialog: boolean = false;
  tituloDialogo: string;  

  producto : Inventario = {};
  productos: Inventario[];
  cols: any[];

  //Dropdown
  marcas: Marca[];
  tipos: TipoLente[];
  
  selectedMarca: Marca = {};
  selectedType: TipoLente = {};
 
  constructor(
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private tipoLenteService: TipoLenteService,
    private messageService: MessageService,
    private inventarioService: InventarioService,
    private confirmationService: ConfirmationService,  
    
  ) { 
    this.createForm();
  }

  ngOnInit() {

    this.consultProducts();
    this.consultBrands();
    this.consultType();

    this.cols = [
      { field: 'idinventario', header: 'Id',  width: '10%' },
      { field: 'codigo', header: 'Codigo',  width: '10%' },
      { field: 'descripcion', header: 'Nombre',  width: '20%' },
      { field: 'tipo_lente', header: 'Tipo',  width: '20%' },
      { field: 'marca', header: 'Marca',  width: '20%' },
      { field: 'cantidad_total', header: 'Stock',  width: '10%' },
      { field: 'precio', header: 'Precio $',  width: '10%' },
    ];
  }
 

  createForm(){

    this.myForm = this.fb.group({
      tipo_lente: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      cantidad_total: ['', [Validators.required]],
      descripcion: ['', [Validators.required,Validators.minLength(1), Validators.maxLength (20)]],
      codigo: ['', [Validators.required,Validators.minLength(1), Validators.maxLength (20)]],
      foto: ['', [Validators.required]],
      precio: ['', [Validators.required]],
    });
  }

  consultProducts() {

    this.inventarioService.getAll().subscribe( (data) => this.productos = data )
    // this.productos =  [
    //   {
    //     id_: 1,
    //     idinventario:2,
    //     tipo_lente:3,
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
    //     tipo_lente:3,
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
    //     tipo_lente:3,
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
    //     tipo_lente:3,
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
    //     tipo_lente:3,
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

    //Petición promise
    // this.inventarioService.getAll()
    // .toPromise()
    // .then(results => { this.productos = results; })
    // .catch(err => { console.log(err); });

  }

  consultType() {

    this.tipoLenteService.getAll().subscribe( (data) => this.tipos = data )
    // this.tipos= [
    //   {
    //     tipo_lente:1,
    //     tipo_lente:"De sol",
    //   },
    //   {
    //     tipo_lente:2,
    //     tipo_lente:"Formulados",
    //   },
    //   {
    //     tipo_lente:3,
    //     tipo_lente:"De contacto",
    //   },
    //   {
    //     tipo_lente:4,
    //     tipo_lente:"Otro",
    //   },
    //   {
    //     tipo_lente:5,
    //     tipo_lente:"Otroo",
    //   },
    //   {
    //     tipo_lente:6,
    //     tipo_lente:"Otrooo",
    //   }
    // ]

    // this.tipoLenteService.getAll()
    // .toPromise()
    // .then(results => { this.tipos = results; })
    // .catch(err => { console.log(err) }); 
  }

  consultBrands() {
    this.marcaService.getAll().subscribe( (data) => this.marcas = data )
    // this.marcas=[
    //   {
    //     marca:1,
    //     nombre_marca:"Rayband",
    //   },
    //   {
    //     marca:2,
    //     nombre_marca:"Dior",
    //   },
    //   {
    //     marca:3,
    //     nombre_marca:"Vogue",
    //   },
    //   {
    //     marca:4,
    //     nombre_marca:"Tom Ford",
    //   },
    //   {
    //     marca:5,
    //     nombre_marca:"Timberland",
    //   },
    //   {
    //     marca:6,
    //     nombre_marca:"Hugo Boss",
    //   },
    //   {
    //     marca:7,
    //     nombre_marca:"Fleshlook",
    //   },
    //   {
    //     marca:8,
    //     nombre_marca:"Acuvue",
    //   }
    // ]

    // this.marcaService.getAll()
    // .toPromise()
    // .then(results => { this.marcas = results; })
    // .catch(err => { console.log(err) });
  }

  save(){

   
     if (this.myForm.valid) { 

      console.log("Enviando");
      console.log(this.producto);

      this.producto.marca = this.selectedMarca.id;
      this.producto.tipo_lente = this.selectedType.id;

      if (this.newProduct) {

        this.inventarioService.create(this.producto)
        .toPromise()
        .then(results => { 
          this.consultProducts();
          this.showSuccess('El producto se ha registrado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al registrar producto');
          console.log(err); 
        });

      }
      else {
        
        this.inventarioService.update(this.producto)
        .toPromise()
        .then(results => { 
          this.consultProducts();
          this.showSuccess('El producto se ha actualizado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al actualizar producto');
          console.log(err); 
        });

      }

      this.close(); 
    }
  }

  deleteMovementType(productoActual: Inventario){

    this.inventarioService.delete(productoActual.id)
    .toPromise()
    .then(results => { 
      this.consultProducts();
      this.showSuccess('El producto se ha eliminado satisfactoriamente');
    })
    .catch( err => { 
      this.showError('El producto no se ha podido eliminar');
      console.log(err);
    });
  }

  remove(productoActual: Inventario){
    this.confirmationService.confirm(
      {
        message: "¿Desea eliminar el producto?",
        accept: () => {     
          this.deleteMovementType(productoActual); 
        }
      }
    );
  }

  edit(productoActual: Inventario){
    this.newProduct = false;
    this.producto = this.clone(productoActual);
    this.displayDialog   = true;
    this.tituloDialogo   = "Editar Producto";
  }

  showDialogToAdd(){
    this.newProduct = true;
    this.producto  = {};
    this.tituloDialogo   = "Nuevo producto";
    this.displayDialog   = true;
  }

  close(){
    
    this.selectedMarca = {};
    this.selectedType = {};
    this.producto  = null;
    this.displayDialog   = false;
    this.createForm();
  }

  clone(c: Inventario): Inventario {
    let x = {};
    for (let prop in c) {
      x[prop] = c[prop];
    }
    return x;
  }

  private showError(errMsg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'error', summary: errMsg });
  }

  private showSuccess(successMsg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'success', summary: successMsg });
  }


}
