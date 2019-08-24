import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { UsersRoutingModule} from './users.routing.module';
import { UsersService } from './users.service';
import { UsersInterceptorProvider } from '../interceptors/users.interceptor';
import { CommonInterceptorProvider } from '../interceptors/common.interceptor';
import { SecureInterceptorProvider } from '../interceptors/secure.interceptor';
import { ErrorInterceptorProvider } from '../interceptors/error.interceptor';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [
    CommonInterceptorProvider,
    SecureInterceptorProvider,
    UsersInterceptorProvider,
    ErrorInterceptorProvider,
    UsersService
  ]
})
export class UsersModule { }
