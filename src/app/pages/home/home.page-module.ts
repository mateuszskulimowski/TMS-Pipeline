import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { EmployeesListComponentModule } from 'src/app/components/employees-list/employees-list.component-module';
import { TeamsListComponentModule } from 'src/app/components/teams-list/teams-list.component-module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CenterLayoutComponentModule,
    DescriptionComponentModule,
    TeamsListComponentModule,
    EmployeesListComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [HomePage],
})
export class HomePageModule {}
