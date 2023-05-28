import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TabsetModel } from 'src/app/models/tabset.model';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams-detail-page',
  templateUrl: './teams-detail.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsDetailPage {
  readonly teams$: Observable<TeamModel[]> = this._teamService
    .getTeams()
    .pipe(
      switchMap((teams) =>
        this._activatedRoute.params.pipe(
          map((params) => teams.filter((team) => team.id === params['teamId']))
        )
      )
    );

  constructor(
    private _teamService: TeamService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
