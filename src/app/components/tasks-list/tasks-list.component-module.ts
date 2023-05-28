import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckListProgresbarDirectiveModule } from 'src/app/directives/progresbar/check-list-progresbar.directive-module';
import { ConvertUnixDatePipeModule } from 'src/app/pipes/convert-unix-date.pipe-module';
import { IsDoneCheckListPipeModule } from 'src/app/pipes/is-done-check-list.pipe-module';
import { AvatarsListComponentModule } from '../avatars-list/avatars-list.component-module';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
  imports: [
    CommonModule,
    IsDoneCheckListPipeModule,
    AvatarsListComponentModule,

    CheckListProgresbarDirectiveModule,
    ConvertUnixDatePipeModule,
  ],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
