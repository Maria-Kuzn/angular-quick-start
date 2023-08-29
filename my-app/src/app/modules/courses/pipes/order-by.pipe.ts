import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[], field: string): any[] {
    return list.sort((a, b) => a[field] < b[field] ? 1 : -1);
  }
}