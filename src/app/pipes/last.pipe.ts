import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(values: string[], ...args: unknown[]): string {
    return `${values[values.length - 1]} ${args[0]}  ${args[1]}`;
  }

}
