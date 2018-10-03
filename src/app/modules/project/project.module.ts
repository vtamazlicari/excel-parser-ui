import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProjectsPageComponent, ProjectsListComponent],
  exports: [ProjectsPageComponent, ProjectsListComponent]
})
export class ProjectModule { }
