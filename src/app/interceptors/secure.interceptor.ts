import { ClassProvider, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecureInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('SecureInterceptor');
        const newRequest = request.clone({
            // url: request.url.replace('http://', 'https://')
            url: request.url.replace('https://', 'http://')
        });
        return next.handle(newRequest);
    }
}

export const SecureInterceptorProvider: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: SecureInterceptor,
    multi: true
};
