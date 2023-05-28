import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertUnixDate' })
export class ConvertUnixDatePipe implements PipeTransform {
  transform(unixTime: string): string {
    const milliseconds = +unixTime * 1000;
    const dateObject = new Date(milliseconds);
    const day = dateObject.toLocaleString('en-US', { day: 'numeric' });
    const month = dateObject.toLocaleString('en-US', { month: 'long' });
    const year = dateObject.toLocaleString('en-US', { year: 'numeric' });

    return `${month} ${day}, ${year}`;
  }
}
