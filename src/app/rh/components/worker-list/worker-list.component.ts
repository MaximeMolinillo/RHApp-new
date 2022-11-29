import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from 'src/app/core/models/worker.model';
import { WorkerService } from 'src/app/core/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent {

  workers$!: Observable<Worker[]>

  constructor(
    private workerService: WorkerService
  ){}

  ngOnInit(): void {
    this.workers$ = this.workerService.getWorkerList();
  }
}
