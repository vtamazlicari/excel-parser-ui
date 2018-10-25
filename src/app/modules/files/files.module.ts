import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {filesRoutes} from '@modules/files/files.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'ngx-bootstrap';
import {MyFilesComponent} from '@modules/files/container/my-files/my-files.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    filesRoutes,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AccordionModule.forRoot()

  ],
  declarations: [MyFilesComponent],
  exports: [MyFilesComponent]
})
export class FilesModule { }
