import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, shareReplay, switchMap } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeQueryModel } from 'src/app/query-models/employee.query-model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  readonly employee$: Observable<EmployeeQueryModel[]> =
    this._activatedRoute.params.pipe(
      switchMap((params) =>
        this._employeeService.getEmployees().pipe(
          shareReplay(1),
          map((employees) => this.mapEmpoloyeeQuery(employees, params))
        )
      )
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService
  ) {}

  mapEmpoloyeeQuery(
    employees: EmployeeModel[],
    params: Params
  ): EmployeeQueryModel[] {
    return employees
      .filter((employee) => employee.id === params['employeeId'])
      .map((employee) => ({
        id: employee.id,
        name: `${employee.firstName} ${employee.lastName}`,
        avatarUrl: employee.avatarUrl,
        position: employee.position,
      }));
  }
}
