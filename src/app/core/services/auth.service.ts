import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user.model";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Basic ' + btoa('loulou59:loulou5959'),
        'Access-Control-Allow-Origin': '*',
    })
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
     isLogged: boolean = false;
    roleAs: string | null | undefined;

    constructor(private router: Router, private http: HttpClient) { }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    async login({ username, password }: { username: string; password: string; }): Promise<Observable<boolean>> {
        let utilisateur = new User(username, password, ""); var subject = new Subject<boolean>();
        this.http.post<User>('http://localhost:3000/api/personnes/login', utilisateur, httpOptions).subscribe({
            next: (utilisateurCo) => {
                if (utilisateurCo) {
                    console.log(utilisateurCo);
                    
                    localStorage.setItem('USER', JSON.stringify(utilisateurCo))
                    this.loggedIn.next(true);
                    subject.next(true);
                } else {
                    this.loggedIn.next(false);
                    subject.next(false);
                }
            },
            error: (error) => {
                console.log("error : " + error);
                this.loggedIn.next(false);
                subject.next(false);
            }
        }
        )
        return subject.asObservable();
    }



    // login(username: string, password: string): boolean {
    //     this.isLoggedIn = (username == 'max' && password == 'root');
    //     return this.isLoggedIn
    // }

    logout() {
        this.isLogged = false;
        this.router.navigate(['/login'])
    }
    getUser() {
        let userConnect = localStorage.getItem('USER');
        if(userConnect != null) {
            return JSON.parse(userConnect)
        } else {
            return null;
        }
    }
}