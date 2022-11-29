import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RhModule } from './rh/rh.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RhModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
