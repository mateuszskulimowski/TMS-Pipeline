import { CheckListItemModel } from '../models/check-list-item.model';
import { EmployeeModel } from '../models/employee.model';

export interface TaskWithChecklistQueryModel {
  readonly name: string;
  readonly checkListIds: string[];
  readonly assigneeIds: string[];
  readonly dueDate: string;
  readonly checkList: CheckListItemModel[];
  readonly employees: EmployeeModel[];
}
