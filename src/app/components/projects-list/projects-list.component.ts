import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  // @Input() employeeId!: string;
  readonly projects$: Observable<any> = this._projectService.getProjects().pipe(
    shareReplay(1),
    switchMap((projects) =>
      this._activatedRoute.params.pipe(
        map((params) => {
          return !params['id']
            ? projects
            : projects.filter((project) => {
                console.log('pierwszy filtr');
                return project.assignees.find(
                  (assignee) => assignee.id === params['id']
                );
              });
        })
      )
    )
  );

  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
