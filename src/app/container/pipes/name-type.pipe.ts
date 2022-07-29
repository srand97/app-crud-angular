import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameType'
})
export class NameTypePipe implements PipeTransform {

  transform(id: string, types : Array<any>): string {
    const {nameType} : any = types?.find(t => t?.id === id) || 'Invalido';
    return nameType || 'Invalido'
  }

}
