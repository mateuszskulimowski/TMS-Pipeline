import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { EmployeeDetailComponentModule } from 'src/app/components/employee-detail/employee-detail.component-module';
import { ProjectsListComponentModule } from 'src/app/components/projects-list/projects-list.component-module';
import { TabContentTitleComponentModule } from 'src/app/components/tab-content-title/tab-content-title.component-module';
import { TabContentComponentModule } from 'src/app/components/tab-content/tab-content.component-module';
import { TabsetComponentModule } from 'src/app/components/tabset/tabset.component-module';
import { TeamsListComponentModule } from 'src/app/components/teams-list/teams-list.component-module';
import { TabsetDirectiveModule } from 'src/app/directives/tabset/tabset.directive-module';
import { EmployeeDetailsPage } from './employee-details.page';

@NgModule({
  imports: [
    TabsetComponentModule,
    CenterLayoutComponentModule,
    EmployeeDetailComponentModule,
    ProjectsListComponentModule,
    TabContentComponentModule,
    TabContentTitleComponentModule,
    CommonModule,
    TabsetComponentModule,
    TeamsListComponentModule,
    TabsetDirectiveModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [EmployeeDetailsPage],
})
export class EmployeeDetailsPageModule {}
