import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateWorkerComponent } from './components/create-worker/create-worker.component';
import { UpdateWorkerComponent } from './components/update-worker/update-worker.component';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';



@NgModule({
  declarations: [
    WorkerListComponent,
    CreateWorkerComponent,
    UpdateWorkerComponent,
    WorkerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WorkerListComponent,
    CreateWorkerComponent,
    UpdateWorkerComponent,
    WorkerFormComponent
  ]
})
export class RhModule { }
