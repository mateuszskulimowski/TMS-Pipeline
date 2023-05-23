import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService
    .getEmployees()
    .pipe(shareReplay(1));

  constructor(private _employeeService: EmployeeService) {}
}
