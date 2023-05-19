export interface TaskModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: string;
  readonly dueDate: string;
  readonly assigneeIds: string[];
  readonly checkList: string[];
  readonly projectId: string;
  readonly id: string;
}
