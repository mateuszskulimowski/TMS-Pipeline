import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [CenterLayoutComponentModule],
  declarations: [ProjectsPage],
  providers: [],
  exports: [ProjectsPage],
})
export class ProjectsPageModule {}
