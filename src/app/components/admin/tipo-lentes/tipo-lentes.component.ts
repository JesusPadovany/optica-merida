import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TipoLenteService } from '../../../services/tipo-lente.service';
import {  TipoLente } from 'src/app/models/tipo-lente';

@Component({
  selector: 'app-tipo-lentes',
  templateUrl: './tipo-lentes.component.html',
  styleUrls: ['./tipo-lentes.component.css'],
  providers: [ConfirmationService, MessageService, TipoLenteService]

})
export class TipoLentesComponent implements OnInit {

  myForm: FormGroup;
  newType: boolean;
  displayDialog: boolean = false;
  tituloDialogo: string;  

  tipoLente : TipoLente = {};
  tipoLentes: TipoLente[];
  cols: any[];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private tipoLenteService: TipoLenteService,
    private confirmationService: ConfirmationService,  
  ) { 
    this.createForm();
  }

  ngOnInit() {

    this.consultType();

    this.cols = [
      { field: 'idtipo_lente', header: 'Id',  width: '10%' },
      { field: 'tipo_lente', header: 'Tipo',  width: '80%' },
    ];
  }

  createForm(){

    this.myForm = this.fb.group({
      tipo_lente: ['', [Validators.required,Validators.minLength(1), Validators.maxLength (15)]],
    });
  }

  consultType() {
    
    this.tipoLentes= [
      {
        idtipo_lente:1,
        tipo_lente:"De sol",
      },
      {
        idtipo_lente:2,
        tipo_lente:"Formulados",
      },
      {
        idtipo_lente:3,
        tipo_lente:"De contacto",
      },
      {
        idtipo_lente:4,
        tipo_lente:"Otro",
      },
      {
        idtipo_lente:5,
        tipo_lente:"Otroo",
      },
      {
        idtipo_lente:6,
        tipo_lente:"Otrooo",
      }
    ]

    //Petición promise
    // this.tipoLenteService.getAll()
    // .toPromise()
    // .then(results => { this.tipos = results; })
    // .catch(err => { console.log(err); });
  }

  save(){

    if (this.myForm.valid) { 

      if (this.newType) {

        this.tipoLenteService.create(this.tipoLente)
        .toPromise()
        .then(results => { 
          this.consultType();
          this.showSuccess('El tipo de lente se ha registrado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al registrar tipo');
          console.log(err); 
        });

      }
      else {
        
        this.tipoLenteService.update(this.tipoLente)
        .toPromise()
        .then(results => { 
          this.consultType();
          this.showSuccess('El tipo de lente se ha actualizado satisfactoriamente');
        })
        .catch(err => { 
          this.showError('Error al actualizar tipo');
          console.log(err); 
        });

      }

      this.close(); 
    }
  }

  deleteMovementType(tipoActual: TipoLente){

    this.tipoLenteService.delete(tipoActual.idtipo_lente)
    .toPromise()
    .then(results => { 
      this.consultType();
      this.showSuccess('El tipo de lente se ha eliminado satisfactoriamente');
    })
    .catch( err => { 
      this.showError('El tipo de lente no se ha podido eliminar');
      console.log(err);
    });
  }

  remove(tipoActual: TipoLente){
    this.confirmationService.confirm(
      {
        message: "¿Desea eliminar el tipo de lente?",
        accept: () => {     
          this.deleteMovementType(tipoActual); 
        }
      }
    );
  }

  edit(tipoActual: TipoLente){
    this.newType = false;
    this.tipoLente = this.clone(tipoActual);
    this.displayDialog   = true;
    this.tituloDialogo   = "Editar tipo";
  }

  showDialogToAdd(){
    this.newType = true;
    this.tipoLente  = {};
    this.tituloDialogo   = "Nueva tipo";
    this.displayDialog   = true;
  }

  close(){
    this.tipoLente  = null;
    this.displayDialog   = false;
    this.createForm();
  }

  clone(c: TipoLente): TipoLente {
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
