import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResizableDirective} from './directives/resizable.directive';
import {AccordionModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResizableDirective]
})
export class SharedModule { }
