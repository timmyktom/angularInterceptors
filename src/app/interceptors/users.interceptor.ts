import { ClassProvider, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('UsersInterceptor');
        const newRequest = request.clone({
            setHeaders : {
                MyUsersInterceptorHeader: 'My Users Interceptor header'
            }
        });
        return next.handle(newRequest);
    }
}

export const UsersInterceptorProvider: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: UsersInterceptor,
    multi: true
};
