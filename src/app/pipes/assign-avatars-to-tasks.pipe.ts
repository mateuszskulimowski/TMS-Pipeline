import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';

@Pipe({ name: 'assignAvatarsToTasks' })
export class AssignAvatarsToTasksPipe implements PipeTransform {
  transform(value: string, employees: EmployeeModel[]): unknown {
    // console.log('value', value);
    // console.log('employees', employees);
    const avatar: string = employees
      .filter((employee) => employee.id === value)
      .map((employee) => employee.avatarUrl)
      .join('');

    return avatar;
  }
}
