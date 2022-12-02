import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RhModule } from './rh/rh.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateDayoffComponent } from './worker/create-dayoff/create-dayoff.component';
import { DayoffFormComponent } from './worker/dayoff-form/dayoff-form.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CreateDayoffComponent,
    DayoffFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RhModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
