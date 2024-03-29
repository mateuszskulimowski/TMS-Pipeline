import { Pipe, PipeTransform } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { CheckListItemModel } from '../models/check-list-item.model';
import { TaskService } from '../services/task.service';

@Pipe({ name: 'isDoneCheckList' })
export class IsDoneCheckListPipe implements PipeTransform {
  constructor(private _taskService: TaskService) {}
  transform(value: string[], checkListItems: CheckListItemModel[]): string {
    const isDone: number = checkListItems
      .filter((check) => value.includes(check.id))
      .filter((val) => val.isDone).length;

    return `${isDone}/${value.length}`;
  }
}
