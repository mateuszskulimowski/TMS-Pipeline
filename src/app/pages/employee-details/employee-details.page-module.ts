import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { EmployeeDetailComponentModule } from 'src/app/components/employee-detail/employee-detail.component-module';
import { ProjectsListComponentModule } from 'src/app/components/projects-list/projects-list.component-module';
import { TabsetComponentModule } from 'src/app/components/tabset/tabset.component-module';
import { TeamsListComponentModule } from 'src/app/components/teams-list/teams-list.component-module';
import { TabContentDirectiveModule } from 'src/app/directives/tab-content/tab-content.directive-module';
import { EmployeeDetailsPage } from './employee-details.page';

@NgModule({
  imports: [
    CenterLayoutComponentModule,
    ProjectsListComponentModule,
    CommonModule,
    TabsetComponentModule,
    TeamsListComponentModule,
    TabContentDirectiveModule,
    EmployeeDetailComponentModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [EmployeeDetailsPage],
})
export class EmployeeDetailsPageModule {}
