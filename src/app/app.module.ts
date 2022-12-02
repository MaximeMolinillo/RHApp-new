import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundCommponent } from './page-not-found/page-not-found.component';
import { RhModule } from './rh/rh.module';
import { CreateWorkerComponent } from './create-worker/create-worker.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateWorkerComponent } from './update-worker/update-worker.component';
import { DayoffListComponent } from './dayoff-list/dayoff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundCommponent,
    AuthComponent,
    CreateWorkerComponent,
    WorkerFormComponent,
    UpdateWorkerComponent,
    DayoffListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RhModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
