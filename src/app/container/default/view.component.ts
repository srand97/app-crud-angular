import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ModalDirective } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { entriesService } from '../services/entries.service';
import { TypesService } from '../services/types.service';


@Component({
  selector: 'app-show',
  templateUrl: './view.component.html'
})
export class ViewComponent  {

  public entries : Array<any> = []
  public types : Array<any> = []
  public editForm: FormGroup
  public createForm: FormGroup
  public formOutput : FormGroup 

 
  // @ViewChild('modalCreate') public modalCreate  : ModalDirec;
  
  constructor(
    public formBuilder: FormBuilder,
    private entriesService : entriesService,
    private typesService : TypesService
  ) 
  {
    this.getAllEntries()
    this.getAllTypes()
    this.initFormCreate();
    this.initFormOutput()
  }

  initFormCreate() {
    this.createForm = this.formBuilder.group({
      tipo_v: [''],
      placa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      horaE: ['',],   
    })
  }

  initFormOutput(){
    this.formOutput = this.formBuilder.group({
      id : [null],
      tipo_v: [null],
      placa: [''],
      horaE: ['',], 
      horaS : [''],
      price : ['']
    })
  }

  getAllEntries(){
    this.entries = this.entriesService.getEntries()
  }

  getAllTypes(){
    this.types = this.typesService.getTypes()
  }
 
  createEntrada() {
    const   hoy = new Date();
    const entrada = moment(hoy).format("YYYY-MM-DD hh:mm A")
    this.createForm.get('horaE').setValue(entrada)
    if(!this.createForm.valid){
      Swal.fire('error!', 'Debe completar todos los campos', 'error' )
      return
    }

    const isCreated = this.entriesService.registerEntry(this.createForm.value)
    isCreated &&  Swal.fire('Exito!', 'Creado exitosamente', 'success' )
    this.getAllEntries()
    const buttonCancelCreate = document.getElementById('buttonCancelCreate').click()
   }

   checkOut() {
      
      const isRegisterOut : boolean = this.entriesService.registerOut(this.formOutput.value)
      this.getAllEntries()
      document.getElementById('buttonCancelFacture').click()
      isRegisterOut && Swal.fire('Exito','Vehiculo retirado correctamente', 'success')
   }

   showFacture(entry){
      const facture = this.entriesService.generateFacture(entry)
      this.formOutput.patchValue(facture)
      console.log(this.formOutput.value)
   }

   openModalCreate(){ this.createForm.reset() }
    
}
