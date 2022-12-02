import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DayOff } from "../models/day-off.model";


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

export class DayOffService {
    constructor(private http: HttpClient) { }

    //liste Congées
    getDayoffList(): Observable<any> {


        return this.http.get<any>('http://localhost:3000/api/conges', httpOptions);
    }

    //Creation
    createDayoff(dayoff: DayOff): Observable<any> {
        console.log(dayoff);
        return this.http.post('http://localhost:3000/api/conges', dayoff, httpOptions);
    }

    // //mise à jour
    updateDayoff(dayoff: DayOff, personne: number): Observable<any> {
        return this.http.put(`http://localhost:3000/api/conges/${personne}`, dayoff, httpOptions);
    }

    // Travailleur par ID
    getDayoffById(dayofId: number): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/api/personne/${dayofId}`, httpOptions);
    }

}