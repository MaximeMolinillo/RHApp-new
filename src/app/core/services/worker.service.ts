import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Worker } from "../models/worker.model";

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

export class WorkerService {
    constructor(private http: HttpClient) { }


    //Liste travailleur
    getWorkerList(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/api/personnes', httpOptions);
    }

    //Creation
    createWorker(worker: Worker): Observable<any> {
        console.log(worker);
        return this.http.post('http://localhost:3000/api/personnes', worker, httpOptions);
    }

    //Delete
    deleteWorker(workerId: number): Observable<any> {
        return this.http.delete<any>(`http://localhost:3000/api/personne/${workerId}`, httpOptions);
    }

    // //mise à jour
    updateWorker(worker: Worker, workerId: number): Observable<any> {
        return this.http.put(`http://localhost:3000/api/personne/${workerId}`, worker, httpOptions);
    }

    // Travailleur par ID
    getWorkerById(workerId: number): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/api/personne/${workerId}`, httpOptions);
    }

}