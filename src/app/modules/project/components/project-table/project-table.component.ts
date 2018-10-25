import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }

  addColumn(columnNr) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].splice(columnNr, 0, '');
    }
    console.log(this.data);
  }

  addRow(rowNr) {
    const row = [];
    for (let i = 0; i < this.data[rowNr].length; i++) {
      row[i] = '';
    }
    this.data.splice(rowNr, 0, row);
  }

  deleteRow(rowNr) {
    this.data.splice(rowNr, 1);
  }

  deleteColumn(columnNr) {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].splice(columnNr, 1);
    }
    console.log(this.data);
  }
}
