import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundCommponent } from './component/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageNotFoundCommponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageNotFoundCommponent
  ]
})
export class CoreModule { }
