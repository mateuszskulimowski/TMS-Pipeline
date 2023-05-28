import { CheckListItemModel } from '../models/check-list-item.model';

export interface ProjectQueryModel {
  readonly name: string;
  readonly percentage: number;
  readonly dueDate: string;
  readonly taskIds: string[];
  readonly checkList: CheckListItemModel[];
}
