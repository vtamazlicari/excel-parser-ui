import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsPageComponent} from './components/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent
  },
];

export const projectRoutes: ModuleWithProviders = RouterModule.forChild(routes);
