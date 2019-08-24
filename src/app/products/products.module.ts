import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule} from './products.routing.module';
import { ProductsService } from './products.service';
import { ProductInterceptorProvider } from '../interceptors/products.interceptor';
import { SecureInterceptorProvider } from '../interceptors/secure.interceptor';
import { ErrorInterceptorProvider } from '../interceptors/error.interceptor';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductInterceptorProvider,
    SecureInterceptorProvider,
    ErrorInterceptorProvider,
    ProductsService
  ]
})
export class ProductsModule { }
