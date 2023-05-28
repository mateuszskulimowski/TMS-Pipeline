import { Pipe, PipeTransform } from '@angular/core';
import { TeamModel } from '../models/team.model';

@Pipe({ name: 'projectsAndMembersInTeam' })
export class ProjectsAndMembersInTeamPipe implements PipeTransform {
  transform(value: TeamModel): string {
    return `${value.projects.length} Projects, ${value.members.length} Members`;
  }
}
