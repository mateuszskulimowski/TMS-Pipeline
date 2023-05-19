import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPage } from './pages/teams/teams.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { ProjectsPageModule } from './pages/projects/projects.page-module';
import { TasksPageModule } from './pages/tasks/tasks.page-module';
import { EmployeesPageModule } from './pages/employees/employees.page-module';

const routes: Routes = [
  { path: 'teams', component: TeamsPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'tasks', component: TasksPage },
  { path: 'employees', component: EmployeesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsPageModule, TasksPageModule, EmployeesPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
