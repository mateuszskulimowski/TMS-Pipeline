import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarsListComponentModule } from 'src/app/components/avatars-list/avatars-list.component-module';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { ProjectsListComponentModule } from 'src/app/components/projects-list/projects-list.component-module';
import { TabsetComponentModule } from 'src/app/components/tabset/tabset.component-module';
import { TabContentDirectiveModule } from 'src/app/directives/tab-content/tab-content.directive-module';
import { TeamsDetailPage } from './teams-detail.page';

@NgModule({
  imports: [
    CommonModule,
    CenterLayoutComponentModule,
    TabsetComponentModule,
    ProjectsListComponentModule,
    TabContentDirectiveModule,
    DescriptionComponentModule,
    AvatarsListComponentModule,
  ],
  declarations: [TeamsDetailPage],
  providers: [],
  exports: [TeamsDetailPage],
})
export class TeamsDetailPageModule {}
