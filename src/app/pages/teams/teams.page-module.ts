import { NgModule } from '@angular/core';
import { CenterLayoutComponentModule } from 'src/app/components/center-layout/center-layout.component-module';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { TabContentComponentModule } from 'src/app/components/tab-content/tab-content.component-module';
import { TeamsListComponentModule } from 'src/app/components/teams-list/teams-list.component-module';
import { TeamsPage } from './teams.page';

@NgModule({
  imports: [
    DescriptionComponentModule,
    TeamsListComponentModule,
    CenterLayoutComponentModule,
    TabContentComponentModule,
  ],
  declarations: [TeamsPage],
  providers: [],
  exports: [TeamsPage],
})
export class TeamsPageModule {}
