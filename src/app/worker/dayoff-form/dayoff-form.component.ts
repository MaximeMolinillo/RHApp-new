import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DayOff } from '../../core/models/day-off.model';
import { DayOffService } from '../../core/services/day-off.service';

@Component({
  selector: 'app-dayoff-form',
  templateUrl: './dayoff-form.component.html',
  styleUrls: ['./dayoff-form.component.scss']
})
export class DayoffFormComponent {
  @Input()
  dayoff!: DayOff;

  constructor(
    private dayoffSrv: DayOffService,
    private router: Router,
  ) { }

  onSubmitDayOff() {
    // modification
    // if (this.dayoff.id == undefined) {
      console.log(this.dayoff);
      this.dayoffSrv.createDayoff(this.dayoff).subscribe(() => {
        this.router.navigate(['conges']);
      })
    // } 

  }
}
