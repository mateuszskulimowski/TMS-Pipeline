import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { CheckListItemModel } from '../../models/check-list-item.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  readonly tasks$: Observable<TaskModel[]> = this._taskService.getTasks();
  readonly checkListItems$: Observable<CheckListItemModel[]> =
    this._taskService.getCheckListItems();

  constructor(private _taskService: TaskService) {}
}
