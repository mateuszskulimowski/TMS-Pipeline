import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssignAvatarsToTasksPipeModule } from 'src/app/pipes/assign-avatars-to-tasks.pipe-module';
import { IsDoneCheckListPipeModule } from 'src/app/pipes/is-done-check-list.pipe-module';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
  imports: [
    CommonModule,
    IsDoneCheckListPipeModule,
    AssignAvatarsToTasksPipeModule,
  ],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
