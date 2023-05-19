import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamsListComponent } from './teams-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
