import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent],
})
export class EmployeesListComponentModule {}
