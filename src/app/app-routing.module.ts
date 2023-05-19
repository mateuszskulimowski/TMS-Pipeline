import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPage } from './pages/teams/teams.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { ProjectsPageModule } from './pages/projects/projects.page-module';

const routes: Routes = [{ path: 'teams', component: TeamsPage }, { path: 'projects', component: ProjectsPage }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
