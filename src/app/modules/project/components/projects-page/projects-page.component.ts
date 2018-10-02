import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../shared/models/project';
import { map, catchError } from 'rxjs/operators';

import * as XLSX from 'xlsx';

import { BackendService } from '../../../../shared/services/backend.service';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type AOA = any[][];

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor(private backendService: BackendService, private http: HttpClient) { }

  ngOnInit() {
  }

  data: AOA = [[], []];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary', cellDates: true, cellNF: false, cellText: false });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      let ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: '' }));
      console.log(this.data.slice(3))
    };
    reader.readAsBinaryString(target.files[0]);

  }

  getBuiltObject() {
    let projects = [];
    let projectData = [];
    let value = this.data.slice(3);
    for (let i in value) {
      for (let j in value[i]) {
        projectData.push(value[i][j])
      }
      projects.push(new Project(projectData))
    }
    return JSON.stringify(projects);
  }

  buildObject() {
    console.log(this.getBuiltObject());
  }

  postFile() {
    let file = 'TestFileAngular';
    let version = 'TestFileAngular_v2';
    let data = this.getBuiltObject();
    let payload = { file, version, data };
    debugger

    this.backendService.post('projects', payload).pipe(
      catchError((error) => throwError(error))
    ).subscribe((response) => { console.log(response) })

  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    ws['!merges'] = [
      { s: { r: 1, c: 3 }, e: { r: 1, c: 12 } },
      { s: { r: 1, c: 13 }, e: { r: 1, c: 27 } },
      { s: { r: 2, c: 13 }, e: { r: 2, c: 17 } },
      { s: { r: 2, c: 18 }, e: { r: 2, c: 20 } },
      { s: { r: 2, c: 21 }, e: { r: 2, c: 27 } },
    ]

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  console() {
    console.log(this.data)
  }

}
