import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingsComponent } from './app-routings/app-routings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    AppRoutingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
