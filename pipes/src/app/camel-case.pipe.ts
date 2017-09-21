import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let values = value.split(' ');
    let result = '';

    values.forEach(v => {
      result += this.capitalize(v);
    });

    return result.trim();
  }

  capitalize(word: string) {
    return word.substring(0,1).toUpperCase() + word.substr(1).toLowerCase() + ' ';
  }
}
