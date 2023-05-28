import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, shareReplay, tap } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { ProjectQueryModel } from '../../query-models/project.query-model';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';
import { CheckListItemModel } from '../../models/check-list-item.model';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  @Input() teamProjects!: ProjectModel[];
  @Input() isProjectPage!: boolean;

  readonly projects$: Observable<ProjectQueryModel[]> = combineLatest([
    this._projectService.getProjects(),
    this._activatedRoute.params,
    this._taskService.getCheckListItems(),
    this._taskService.getTasks(),
  ]).pipe(
    shareReplay(1),
    map(([projects, params, checkList, tasks]) => {
      if (this.teamProjects) {
        return {
          projects: projects.filter((project) =>
            this.teamProjects.find(
              (teamProject) => teamProject.id === project.id
            )
          ),
          checkList: checkList,
          tasks: tasks,
        };
      }

      return !params['employeeId']
        ? { projects: projects, checkList: checkList, tasks: tasks }
        : {
            projects: projects.filter((project) => {
              return project.assignees.find(
                (assignee) => assignee.id === params['employeeId']
              );
            }),
            checkList: checkList,
            tasks: tasks,
          };
    }),
    map((data) => this.mapProjectsQuery(data))
  );

  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute,
    private _taskService: TaskService
  ) {}

  mapProjectsQuery(data: {
    projects: ProjectModel[];
    checkList: CheckListItemModel[];
    tasks: TaskModel[];
  }): ProjectQueryModel[] {
    return data.projects.map((project) => ({
      name: project.name,
      percentage: project.percentage,
      dueDate: project.dueDate,
      taskIds: data.tasks
        .filter((task) => task.projectId === project.id)
        .map((task) => task.checkList)
        .flat(),
      checkList: data.checkList,
    }));
  }
}
