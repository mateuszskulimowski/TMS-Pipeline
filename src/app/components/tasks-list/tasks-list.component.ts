import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { CheckListItemModel } from '../../models/check-list-item.model';
import { EmployeeModel } from '../../models/employee.model';
import { TaskService } from '../../services/task.service';
import { EmployeeService } from '../../services/employee.service';

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
  readonly employees$: Observable<EmployeeModel[]> =
    this._employeeService.getEmployees();

  constructor(
    private _taskService: TaskService,
    private _employeeService: EmployeeService
  ) {}
}
