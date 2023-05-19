import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent],
})
export class EmployeesListComponentModule {}
