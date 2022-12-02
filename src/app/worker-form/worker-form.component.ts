import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../core/services/worker.service';
// import { Worker } from '../core/services/worker.service';
import { Worker } from "../core/models/worker.model";
@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent {
  @Input()
  worker!: Worker;

  constructor(
    private workerSrv: WorkerService,
    private router: Router,
  ) { }

  // ngOnInit(): void {
  //   this.workerService.getWorkerList().subscribe(resultat=> {this.workers$= resultat});
  //   console.log(this.workers$!);
  // }

  // worker.personne.nom
  onSubmit() {
    // modification
    if (this.worker.id == undefined) {
      this.workerSrv.createWorker(this.worker).subscribe(() => {
        this.router.navigate(['worker']);
      })
    } else {
      this.workerSrv.updateWorker(this.worker, this.worker.id).subscribe(() => {
        this.router.navigate(['worker']);
      })
    }
    console.log(this.worker);
  }



}