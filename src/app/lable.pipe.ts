import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lable'
})
export class LablePipe implements PipeTransform {

  transform(gameTitle:string): string {
    return `${gameTitle} Screenshots`;
  }

}
