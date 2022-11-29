import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;

    constructor(private router: Router) { }

    login(username: string, password: string): boolean {
        this.isLoggedIn = (username == 'max' && password =='root');
        return this.isLoggedIn
    }

    logout() {
        this.isLoggedIn = false;
        this.router.navigate(['/login'])
    }
}