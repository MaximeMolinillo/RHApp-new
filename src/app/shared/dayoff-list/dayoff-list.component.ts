import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DayOffService } from '../../core/services/day-off.service';

@Component({
  selector: 'app-dayoff-list',
  templateUrl: './dayoff-list.component.html',
  styleUrls: ['./dayoff-list.component.scss']
})
export class DayoffListComponent {

 dayoff$: any[] | undefined;

  constructor(
    private dayoffService: DayOffService,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.dayoffService.getDayoffList().subscribe(resultat=>
      { 
        (this.dayoff$ = resultat);
        console.log(this.dayoff$);
      });
      
  }
  goToValid(dayoff: any, personne: any) {
    this.router.navigate(['validdayoff', dayoff]);
    this.dayoffService.updateDayoff(dayoff, personne).pipe(
      map(dayoff => ({
        ...dayoff, 
        etat: dayoff.etat === true ? false : true
      }))
    )

  }

  goToInvalid(dayoff: any) {
    this.router.navigate(['invaliddayoff', dayoff]);
  }
}
