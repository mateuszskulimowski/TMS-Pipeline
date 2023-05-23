import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPage } from './pages/teams/teams.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { HomePage } from './pages/home/home.page';
import { EmployeeDetailsPage } from './pages/employee-details/employee-details.page';
import { TeamsDetailPage } from './pages/teams-detail/teams-detail.page';
import { ProjectsPageModule } from './pages/projects/projects.page-module';
import { TasksPageModule } from './pages/tasks/tasks.page-module';
import { EmployeesPageModule } from './pages/employees/employees.page-module';
import { HomePageModule } from './pages/home/home.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details/employee-details.page-module';
import { TeamsDetailPageModule } from './pages/teams-detail/teams-detail.page-module';
import { TabsetComponentModule } from './components/tabset/tabset.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'tasks', component: TasksPage },
  { path: 'employees', component: EmployeesPage },
  { path: '', component: HomePage },
  { path: 'employees/:id', component: EmployeeDetailsPage },
  { path: 'teams/:id', component: TeamsDetailPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProjectsPageModule,
    TasksPageModule,
    EmployeesPageModule,
    HomePageModule,
    EmployeeDetailsPageModule,
    TeamsDetailPageModule,
    TabsetComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
