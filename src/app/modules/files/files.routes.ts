import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFilesComponent} from '@modules/files/container/my-files/my-files.component';

const routes: Routes = [
  {
    path: '',
    component: MyFilesComponent
  },
];

export const filesRoutes: ModuleWithProviders = RouterModule.forChild(routes);
