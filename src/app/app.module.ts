import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponentModule } from './components/description/description.component-module';
import { NavbarComponentModule } from './components/navbar/navbar.component-module';
import { TeamsPageModule } from './pages/teams/teams.page-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    HttpClientModule,
    TeamsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
