import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { EmployeeQueryModel } from 'src/app/query-models/employee.query-model';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent {
  readonly employees$: Observable<EmployeeQueryModel[]> = this._employeeService
    .getEmployees()
    .pipe(
      shareReplay(1),
      map((employees) => this.mapEmployeeQuery(employees))
    );

  constructor(private _employeeService: EmployeeService) {}
  mapEmployeeQuery(employees: EmployeeModel[]): EmployeeQueryModel[] {
    return employees.map((employee) => ({
      id: employee.id,
      name: `${employee.firstName} ${employee.lastName}`,
      avatarUrl: employee.avatarUrl,
      position: employee.position,
    }));
  }
}
