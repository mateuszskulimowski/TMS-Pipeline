import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PercentageProgresbarDirectiveModule } from 'src/app/directives/percentage-progresbar/percentage-progresbar.directive-module';
import { DisplayDatePipeModule } from 'src/app/pipes/display-date.pipe-module';
import { IsDoneCheckListPipeModule } from 'src/app/pipes/is-done-check-list.pipe-module';
import { ProjectsListComponent } from './projects-list.component';
import { CheckListProgresbarDirectiveModule } from 'src/app/directives/progresbar/check-list-progresbar.directive-module';
@NgModule({
  imports: [
    CommonModule,
    DisplayDatePipeModule,
    IsDoneCheckListPipeModule,

    PercentageProgresbarDirectiveModule,
    CheckListProgresbarDirectiveModule,
  ],
  declarations: [ProjectsListComponent],
  providers: [],
  exports: [ProjectsListComponent],
})
export class ProjectsListComponentModule {}
