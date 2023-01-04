import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkModeToggle'
})
export class DarkModeTogglePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(value) {
      return "Turn Dark Mode OFF";
    }else{
      return "Turn Dark Mode ON";
    }
  }

}
