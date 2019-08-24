import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get<any>('https://localhost:4200/assets/users.json');
    }
}
