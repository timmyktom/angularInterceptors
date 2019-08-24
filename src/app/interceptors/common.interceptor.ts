import { ClassProvider, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('CommonInterceptor');
        const newRequest = request.clone({
            setHeaders : {
                MyCommonInterceptorHeader: 'My Common Angular Interceptor header'
            }
        });
        return next.handle(newRequest);
    }
}

export const CommonInterceptorProvider: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CommonInterceptor,
    multi: true
};
