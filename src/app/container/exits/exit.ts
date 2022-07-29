import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { entriesService } from '../services/entries.service';
import { TypesService } from '../services/types.service';


@Component({
  selector: 'app-exit',
  templateUrl: './exit.html'
})
export class exit  {
    public outputs : Array<any> = []
    public types : Array<any> = []
    public formFacture : FormGroup

    constructor(
        public formBuilder: FormBuilder,
        private entriesService : entriesService,
        private typesService : TypesService
    ){
        this.initFormFacture()
        this.getAllOutputs()
        this.getAllTypes()
    }
    initFormFacture(){
        this.formFacture = this.formBuilder.group({
          id : [null],
          tipo_v: [null],
          placa: [''],
          horaE: ['',], 
          horaS : [''],
          price : ['']
        })
      }
    getAllOutputs(){
        this.outputs = this.entriesService.getOutputs()
        console.table(this.outputs)
    }

    getAllTypes(){
        this.types = this.typesService.getTypes()
    }

    
    showFacture(output){
        this.formFacture.patchValue(output)
       
    }
}