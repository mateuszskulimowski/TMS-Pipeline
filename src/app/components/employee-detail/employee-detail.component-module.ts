import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
