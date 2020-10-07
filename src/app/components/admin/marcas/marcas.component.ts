import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MarcaService } from '../../../services/marca.service';
import {  Marca } from 'src/app/models/marca';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css'],
  providers: [ConfirmationService, MessageService, MarcaService]
})
export class MarcasComponent implements OnInit {

  myForm: FormGroup;
  newBrand: boolean;
  displayDialog: boolean = false;
  tituloDialogo: string;  

  marca : Marca = {};
  marcas: Marca[];
  cols: any[];


  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private marcaService: MarcaService,
    private confirmationService: ConfirmationService,  
  ) { 
    this.createForm();
  }

  ngOnInit() {

    this.consultBrands();

    this.cols = [
      { field: 'marca', header: 'Id',  width: '10%' },
      { field: 'nombre_marca', header: 'Nombre',  width: '80%' },
    ];
  }

  createForm(){

    this.myForm = this.fb.group({
      nombre_marca: ['', [Validators.required,Validators.minLength(1), Validators.maxLength (10)]],
    });
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

    //Petición promise
    // this.marcaService.getAll()
    // .toPromise()
    // .then(results => { this.marcas = results; })
    // .catch(err => { console.log(err); });

  }

  save(){

    if (this.myForm.valid) { 

      if (this.newBrand) {

        this.marcaService.create(this.marca)
        .toPromise()
        .then(results => { 
          this.consultBrands();
          this.showSuccess('La marca se ha registrado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al registrar marca');
          console.log(err); 
        });

      }
      else {
        
        this.marcaService.update(this.marca)
        .toPromise()
        .then(results => { 
          this.consultBrands();
          this.showSuccess('La marca se ha actualizado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al actualizar marca');
          console.log(err); 
        });

      }

      this.close(); 
    }
  }

  deleteMovementType(marcaActual: Marca){

    this.marcaService.delete(marcaActual.marca)
    .toPromise()
    .then(results => { 
      this.consultBrands();
      this.showSuccess('La marca se ha eliminado satisfactoriamente');
    })
    .catch( err => { 
      this.showError('La marca no se ha podido eliminar');
      console.log(err);
    });
  }

  remove(marcaActual: Marca){
    this.confirmationService.confirm(
      {
        message: "¿Desea eliminar la marca?",
        accept: () => {     
          this.deleteMovementType(marcaActual); 
        }
      }
    );
  }

  edit(marcaActual: Marca){
    this.newBrand = false;
    this.marca = this.clone(marcaActual);
    this.displayDialog   = true;
    this.tituloDialogo   = "Editar Marca";
  }

  showDialogToAdd(){
    this.newBrand = true;
    this.marca  = {};
    this.tituloDialogo   = "Nueva Marca";
    this.displayDialog   = true;
  }

  close(){
    this.marca  = null;
    this.displayDialog   = false;
    this.createForm();
  }

  clone(c: Marca): Marca {
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
