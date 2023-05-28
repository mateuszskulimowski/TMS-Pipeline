import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, shareReplay, switchMap } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListComponent {
  @Input() isAvatar!: boolean;

  readonly teams$: Observable<TeamModel[]> = this._teamService.getTeams().pipe(
    shareReplay(1),
    switchMap((teams) =>
      this._activatedRoute.params.pipe(
        map((params) => {
          return !params['employeeId']
            ? teams
            : teams.filter((team) =>
                team.members.find(
                  (member) => member.id === params['employeeId']
                )
              );
        })
      )
    )
  );

  constructor(
    private _teamService: TeamService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
