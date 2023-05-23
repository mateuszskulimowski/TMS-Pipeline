import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
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
  readonly checkListItems$: Observable<CheckListItemModel[]> = this._taskService
    .getCheckListItems()
    .pipe(shareReplay(1));
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService
    .getEmployees()
    .pipe(shareReplay(1));
  private _isDoneNumberSubject: BehaviorSubject<number | null> =
    new BehaviorSubject<number | null>(null);
  public isDoneNumber$: Observable<number | null> =
    this._isDoneNumberSubject.asObservable();
  // public x!: number;
  constructor(
    private _taskService: TaskService,
    private _employeeService: EmployeeService
  ) {}
}
