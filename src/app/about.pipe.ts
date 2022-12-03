import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'about'
})
export class AboutPipe implements PipeTransform {

  transform(gameTitle:string): string {
    return `About ${gameTitle}`;
  }

}
