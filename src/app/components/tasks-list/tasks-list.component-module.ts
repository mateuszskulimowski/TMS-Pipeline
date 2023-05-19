import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsDoneCheckListPipeModule } from 'src/app/pipes/is-done-check-list.pipe-module';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
  imports: [CommonModule, IsDoneCheckListPipeModule],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
