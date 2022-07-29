import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  types = [
    {
      id : '1',
      nameType : 'Vehiculos Oficiales',
      price : 0
    },
    {
      id : '2',
      nameType : 'Vehiculos Particulares',
      price : 40
    },
    {
      id : '3',
      nameType : 'Motos',
      price : 20
    },
    {
      id : '4',
      nameType : 'Bicicleta',
      price : 5
    },
    {
      id : '5',
      nameType : 'Vehiculos Pesados',
      price : 50
    },
  ]

  constructor() { }

  getTypes() : Array<any>{
    return this.types
  }
}
