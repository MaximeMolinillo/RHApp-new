import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent } from './components/worker-list/worker-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WorkerListComponent
  ]
})
export class RhModule { }
