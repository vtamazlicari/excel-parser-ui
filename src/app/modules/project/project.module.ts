import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import {WjGridModule} from '../../../../node_modules/wijmo/wijmo.angular2.grid';
import {WjChartModule} from '../../../../node_modules/wijmo/wijmo.angular2.chart';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    WjGridModule,
    WjChartModule,
    NgbModule
  ],
  declarations: [ProjectsPageComponent, ProjectsListComponent, ProjectTableComponent],
  exports: [ProjectsPageComponent, ProjectsListComponent, ProjectTableComponent]
})
export class ProjectModule { }
