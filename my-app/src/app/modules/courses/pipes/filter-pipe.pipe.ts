import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: any[], filterValue: string | undefined): any[] {
    if (!filterValue) {
      return list;
    }
    return list.filter(
      (item) => item.title.toUpperCase().includes(filterValue.toUpperCase()) || 
        item.description.toUpperCase().includes(filterValue.toUpperCase())
    );
  }
}
