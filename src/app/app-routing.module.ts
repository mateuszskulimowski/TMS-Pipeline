import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPage } from './pages/teams/teams.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { ProjectsPageModule } from './pages/projects/projects.page-module';
import { TasksPageModule } from './pages/tasks/tasks.page-module';

const routes: Routes = [
  { path: 'teams', component: TeamsPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'tasks', component: TasksPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsPageModule, TasksPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
