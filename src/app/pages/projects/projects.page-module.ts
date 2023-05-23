import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { ProjectsListComponentModule } from 'src/app/components/projects-list/projects-list.component-module';
import { TabContentComponentModule } from 'src/app/components/tab-content/tab-content.component-module';
import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [
    CenterLayoutComponentModule,
    DescriptionComponentModule,
    ProjectsListComponentModule,
    TabContentComponentModule,
  ],
  declarations: [ProjectsPage],
  providers: [],
  exports: [ProjectsPage],
})
export class ProjectsPageModule {}
