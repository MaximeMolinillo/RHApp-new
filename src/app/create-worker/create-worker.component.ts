import { Component } from '@angular/core';
import { Worker } from '../core/models/worker.model';


@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.scss']
})
export class CreateWorkerComponent {
  
  worker : Worker =  new Worker();
}
