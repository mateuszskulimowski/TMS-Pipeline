import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
} from 'rxjs';
import { TaskService } from '../../services/task.service';
import { EmployeeService } from '../../services/employee.service';
import { TaskWithChecklistQueryModel } from 'src/app/query-models/task-with-checklist.query-model';
import { TaskModel } from 'src/app/models/task.model';
import { CheckListItemModel } from 'src/app/models/check-list-item.model';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  readonly tasks$: Observable<TaskWithChecklistQueryModel[]> = combineLatest([
    this._taskService.getTasks(),
    this._taskService.getCheckListItems(),
    this._employeeService.getEmployees(),
  ]).pipe(
    shareReplay(1),
    map(([tasks, checkLists, employees]) =>
      this.mapTaskQuery(tasks, checkLists, employees)
    )
  );

  private _isDoneNumberSubject: BehaviorSubject<number | null> =
    new BehaviorSubject<number | null>(null);
  public isDoneNumber$: Observable<number | null> =
    this._isDoneNumberSubject.asObservable();

  constructor(
    private _taskService: TaskService,
    private _employeeService: EmployeeService
  ) {}

  mapTaskQuery(
    tasks: TaskModel[],
    checkLists: CheckListItemModel[],
    employees: EmployeeModel[]
  ): TaskWithChecklistQueryModel[] {
    return tasks.map((task) => ({
      name: task.name,
      checkListIds: task.checkList,
      assigneeIds: task.assigneeIds,
      dueDate: task.dueDate,
      checkList: checkLists,
      employees: employees,
    }));
  }
}
