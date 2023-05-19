import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { TasksListComponentModule } from 'src/app/components/tasks-list/tasks-list.component-module';
import { TasksPage } from './tasks.page';

@NgModule({
  imports: [
    DescriptionComponentModule,
    CenterLayoutComponentModule,
    TasksListComponentModule,
  ],
  declarations: [TasksPage],
  providers: [],
  exports: [TasksPage],
})
export class TasksPageModule {}
