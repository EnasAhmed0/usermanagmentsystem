import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(itemes: any[], searchTerm: string): any[] {
    return itemes.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase));
  }
}
