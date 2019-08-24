import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient, handler: HttpBackend) {
        this.http = new HttpClient(handler);
    }

    getHomeData(): Observable<any> {
        return this.http.get<any>('http://localhost:4200/assets/home.json');
    }
}
