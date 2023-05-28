import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarsListComponent } from './avatars-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AvatarsListComponent],
  providers: [],
  exports: [AvatarsListComponent],
})
export class AvatarsListComponentModule {}
