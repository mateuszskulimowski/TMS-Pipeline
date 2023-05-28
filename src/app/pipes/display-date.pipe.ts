import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DueTimeQueryModel } from '../query-models/due-time.query-model';

@Pipe({ name: 'displayDate' })
export class DisplayDatePipe implements PipeTransform {
  constructor(private _activatedRoute: ActivatedRoute) {}
  transform(value: DueTimeQueryModel, difference: boolean): string {
    const startDate = new Date(value.startDate as string);
    const dueDate = new Date(value.dueDate);
    const today = new Date();

    const dueDay = dueDate.toLocaleString('default', { day: 'numeric' });
    const dueMonth = dueDate.toLocaleString('en-US', { month: 'short' });
    const dueYear = dueDate.toLocaleString('default', { year: 'numeric' });

    if (difference) {
      const differenceDate = Math.ceil(
        (dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
      );

      return `Due on ${differenceDate} days`;
    }

    return `Due on ${dueMonth} ${dueDay}, ${dueYear}`;
  }
}
