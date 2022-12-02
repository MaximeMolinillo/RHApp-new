import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Worker } from 'src/app/core/models/worker.model';
import { WorkerService } from 'src/app/core/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent {

  workers$: any[]=[]

  constructor(
    private workerService: WorkerService,
    private router: Router,
  ){}

  ngOnInit(): void {
   this.workerService.getWorkerList().subscribe(resultat=> {this.workers$= resultat});
   // console.log(this.workers$!);
  }

  goToWorker(worker: any) {
    this.router.navigate(['updateworker', worker]);
  }

  deleteWorker(workerId: number) {
    if(confirm("confirmation suppresion")){
    this.workerService.deleteWorker(workerId).subscribe(() => {
      // this.router.navigate(['worker']);
      location.reload();
   
    })
  }
}
}


