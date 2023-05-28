import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsAndMembersInTeamPipeModule } from 'src/app/pipes/projects-and-members-in-team.pipe-module';
import { AvatarsListComponentModule } from '../avatars-list/avatars-list.component-module';
import { TeamsListComponent } from './teams-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AvatarsListComponentModule,
    ProjectsAndMembersInTeamPipeModule,
  ],
  declarations: [TeamsListComponent],
  providers: [],
  exports: [TeamsListComponent],
})
export class TeamsListComponentModule {}
