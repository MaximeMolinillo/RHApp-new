import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WorkerListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    WorkerListComponent
  ]
})
export class RhModule { }
