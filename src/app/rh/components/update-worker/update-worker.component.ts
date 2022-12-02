import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Worker } from "../../../core/models/worker.model";
import { WorkerService } from '../../../core/services/worker.service';


@Component({
  selector: 'app-update-worker',
  template: `<h3 class="center">Modification Salarié : {{ worker?.nom}}</h3>
  <app-worker-form *ngIf="worker" [worker]=worker></app-worker-form>`,
  styleUrls: ['./update-worker.component.scss']
})
export class UpdateWorkerComponent implements OnInit {
  worker: Worker | undefined;

  constructor(
    private workerSrv: WorkerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const workerId: number = Number(this.route.snapshot.paramMap.get('id'));
    if (workerId) {
      this.workerSrv.getWorkerById(workerId).subscribe((resultat: Worker | undefined) => {
        this.worker = resultat;


      })
    } else {
      this.worker = undefined;
      this.router.navigate(['worker', this.worker]);
      // .subscribe(() => {
      //   this.router.navigate(['worker', this.worker.id]);

    }
  }

}
