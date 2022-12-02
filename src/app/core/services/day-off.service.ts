import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const httpOptions = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Basic ' + btoa('loulou59:loulou5959'),
        'Access-Control-Allow-Origin': '*',
    })
}
@Injectable({
    providedIn: 'root'
})

export class DayOffService{
    constructor(private http: HttpClient) {}

//liste Congées
    getDayoffList(): Observable<any> {
    
        
        return this.http.get<any>('http://localhost:3000/api/conges');
    }
    
}