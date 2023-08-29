import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number): string {
    let resultString = "";
    let duration = value;
    let days = Math.floor(duration / (24 * 60));
    resultString += days ? days + 'дн. ' : '';
    duration -= days * 24 * 60;
    let hours = Math.floor(duration / (60));
    resultString += hours ? hours + 'ч. ' : '';
    duration -= hours * 60;
    let minutes = duration;
    resultString += minutes ? minutes + 'мин. ' : '';
    return resultString;
  }
}
