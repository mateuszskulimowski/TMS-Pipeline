import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {}
