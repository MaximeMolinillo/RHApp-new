import { Component } from '@angular/core';
import { DayOff } from '../../core/models/day-off.model';

@Component({
  selector: 'app-create-dayoff',
  templateUrl: './create-dayoff.component.html',
  styleUrls: ['./create-dayoff.component.scss']
})
export class CreateDayoffComponent {

  dayoff : DayOff = new DayOff();

}
