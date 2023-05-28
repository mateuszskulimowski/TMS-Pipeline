import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabContentDirectiveModule } from 'src/app/directives/tab-content/tab-content.directive-module';
import { TabsetComponent } from './tabset.component';

@NgModule({
  imports: [CommonModule, TabContentDirectiveModule],
  declarations: [TabsetComponent],
  providers: [],
  exports: [TabsetComponent],
})
export class TabsetComponentModule {}
