import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';

import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot()
  ],
  declarations: [ProjectsPageComponent, ProjectsListComponent],
  exports: [ProjectsPageComponent, ProjectsListComponent]
})
export class ProjectModule { }
