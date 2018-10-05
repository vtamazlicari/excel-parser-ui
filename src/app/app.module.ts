import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectModule } from './modules/project/project.module';
import { SharedModule } from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {WjGridModule} from '../../node_modules/wijmo/wijmo.angular2.grid';
import {WjChartModule} from '../../node_modules/wijmo/wijmo.angular2.chart';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    CoreModule,
    WjGridModule,
    WjChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
