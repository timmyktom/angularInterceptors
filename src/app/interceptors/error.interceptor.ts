import { ClassProvider, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('ErrorInterceptor Request');
        return next.handle(request).pipe(catchError(err => {
            console.log('ErrorInterceptor Response');
            const error = { message: 'Some Error Occurred'};
            return throwError(error);
        }));
    }
}

export const ErrorInterceptorProvider: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
