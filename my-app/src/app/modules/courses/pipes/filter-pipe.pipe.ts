import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: any[], filterValue: string): any[] {
    return list.filter((item) => item.title.toUpperCase().includes(filterValue.toUpperCase()));
  }

}
