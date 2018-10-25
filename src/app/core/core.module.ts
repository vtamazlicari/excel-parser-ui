import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoggerInterceptorService} from './interceptors/logger-interceptor.service';
import {ErrorInterceptorService} from './interceptors/error-interceptor.service';
import {AlertService} from '../shared/services/alert/alert.service';
import {InitService} from './services/init.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';

export function initAppFactory(initService: InitService) {
  return () => initService.getConfigurations();
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, LayoutComponent],
  exports: [NavbarComponent, LayoutComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    AlertService
  ]
})
export class CoreModule { }
