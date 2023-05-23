import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  readonly employee$: Observable<EmployeeModel[]> =
    this._activatedRoute.params.pipe(
      switchMap((params) =>
        this._employeeService
          .getEmployees()
          .pipe(
            map((employees) =>
              employees.filter((employee) => employee.id === params['id'])
            )
          )
      )
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService
  ) {}
}
