import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Worker } from "../models/worker.model";


@Injectable({
    providedIn: 'root'
})

export class WorkerService{
    constructor(private http: HttpClient){}

    getWorkerList(): Observable<Worker[]>{
        return this.http.get<Worker[]>('http://localhost:3000/api/personnes');
    }
}