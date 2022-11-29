import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundCommponent } from './page-not-found/page-not-found.component';
import { RhModule } from './rh/rh.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundCommponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RhModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
