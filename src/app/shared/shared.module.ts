import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayoffListComponent } from './dayoff-list/dayoff-list.component';



@NgModule({
  declarations: [
    DayoffListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayoffListComponent,
  ]
})
export class SharedModule { }
