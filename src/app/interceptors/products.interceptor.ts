import { ClassProvider, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('ProductInterceptor Request');
        const newRequest = request.clone({
            setHeaders : {
                MyProductInterceptorHeader: 'My Products Interceptor header'
            }
        });
        return next.handle(newRequest).pipe(
            mergeMap(httpEvent => {
                if (httpEvent.type === HttpEventType.Response && httpEvent.status === 200) {
                    console.log('ProductInterceptor Response');
                    return of(httpEvent.clone({
                        body: {
                            apiResponse: {
                                url: newRequest.url,
                                data: httpEvent.body.data
                            }
                        }
                    }));
                }
                return of(httpEvent);
            })
        );
    }
}

export const ProductInterceptorProvider: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ProductInterceptor,
    multi: true
};
