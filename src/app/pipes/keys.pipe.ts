import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false //pendiente del ciclo de cambios de angular
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let keys = [];

    // investigar diferencia entre usar in y of ....en uno se extrae cada key  y en otro valor ...
    for (let key in value) {
      keys.push(key)
    }

    return keys;

  }

}
