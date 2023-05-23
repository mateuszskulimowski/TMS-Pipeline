import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
