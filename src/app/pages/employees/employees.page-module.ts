import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { EmployeesListComponentModule } from 'src/app/components/employees-list/employees-list.component-module';
import { TabContentComponentModule } from 'src/app/components/tab-content/tab-content.component-module';
import { EmployeesPage } from './employees.page';

@NgModule({
  imports: [
    DescriptionComponentModule,
    CenterLayoutComponentModule,
    EmployeesListComponentModule,
    TabContentComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [EmployeesPage],
})
export class EmployeesPageModule {}
