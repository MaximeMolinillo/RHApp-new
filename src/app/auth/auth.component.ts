import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  password!: string  ;
  username!: string;
  message: string = 'Déconnecté';
 
 
  constructor(
    private autSrv: AuthService,
    private router: Router
  ) {}






  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    const isLogged = this.autSrv.login(this.username, this.password);
    if (isLogged) {
      this.router.navigate(['worker']);

    } else {
      this.message = 'Utilisateur ou mot de passe incorect';
    }
  }


}
