import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, keyName: string) {
    return value.sort((a, b) => {
      if (a[keyName] > b[keyName]) {
        return 1;
      } 
      return -1;
    })
  }
}