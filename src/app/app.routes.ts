import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/project/project.module#ProjectModule'
  },
  {
    path: 'my-files',
    loadChildren: './modules/files/files.module#FilesModule'
  },
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
