import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypesService } from './types.service';
import * as moment from 'moment';
// import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class entriesService {

  types : Array<any> = []
 
  constructor(private typesService : TypesService) {
    this.types = this.typesService.getTypes()
  }

  getEntries() : Array<any>{
    const dataStorage : any = JSON.parse(localStorage.getItem('parking'))
    return dataStorage?.entries || []
  }

  getOutputs(){
    const dataStorage : any = JSON.parse(localStorage.getItem('parking'))
    return dataStorage?.outputs || []
  }

  registerEntry(newEntry){
    const newId = (Math.random() + 1).toString(36).substring(7)

    const dataStorage : any = JSON.parse(localStorage.getItem('parking')) || {}
    const entries = dataStorage?.entries || []
    dataStorage.entries = [...entries, { id : newId, ...newEntry }]
    // dataStorage.entries = [{id : newId, ...data} ]
    
    localStorage.setItem('parking', JSON.stringify(dataStorage))

    return true
  }

  registerOut(entry){
    console.log(entry)
    const dataStorage : any = JSON.parse(localStorage.getItem('parking')) || {}
    const entries = dataStorage?.entries 
    const newEntries : Array<any> = entries.filter(e => e?.id !== entry?.id)
    // console.log(newEntries)
    dataStorage.entries = [...newEntries]

    //Registro en salidas
    const outputs : Array<any> = dataStorage.outputs || []
    const newOutputs = [...outputs, entry] 
    dataStorage.outputs = [...newOutputs]
    localStorage.setItem('parking', JSON.stringify(dataStorage))
    return true
  }

  generateFacture(entry) : any{

    const actual_date = new Date()
    const hora_salida = moment(actual_date).format("YYYY-MM-DD hh:mm A")
    const diferenceInMinutes = moment(actual_date).diff(entry?.horaE, 'minutes')
    const type = this.types.find(t => t?.id === entry?.tipo_v)

    const price = diferenceInMinutes * type?.price

    const facture = {
      ...entry,
      price : price,
      horaS : hora_salida
    }

    return facture
  }


}
