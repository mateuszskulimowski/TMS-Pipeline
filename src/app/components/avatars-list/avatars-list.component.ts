import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';
import { AvatarQueryModel } from 'src/app/query-models/avatar.query-model';

@Component({
  selector: 'app-avatars-list',
  templateUrl: './avatars-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarsListComponent {
  public employeesAvatar!: AvatarQueryModel[];
  private _employees!: EmployeeModel[];
  private _assigneeIds!: string[];
  @Input() set employees(values: EmployeeModel[]) {
    this._employees = values;
    if (this._assigneeIds) {
    } else {
      this.employeesAvatar = values.map((val) => ({
        id: val.id,
        avatarUrl: val.avatarUrl,
      }));
    }
  }
  @Input() set asigneeIds(values: string[]) {
    if (values) {
      this.employeesAvatar = values.map((val) => ({
        id: val,
        avatarUrl: this._employees.find((employee) => employee.id === val)
          ?.avatarUrl,
      }));
    }
  }
}
