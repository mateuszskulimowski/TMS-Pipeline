import { NgModule } from '@angular/core';
import { DescriptionComponentModule } from 'src/app/components/description/description.component-module';
import { TeamsListComponentModule } from 'src/app/components/teams-list/teams-list.component-module';
import { TeamsPage } from './teams.page';

@NgModule({
  imports: [DescriptionComponentModule, TeamsListComponentModule],
  declarations: [TeamsPage],
  providers: [],
  exports: [TeamsPage],
})
export class TeamsPageModule {}
