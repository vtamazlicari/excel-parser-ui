import { Component } from '@angular/core';

import * as XLSX from 'xlsx';

type AOA = any[][];

/* import * as JSZip from 'jszip';
import * as wjcXlsx from 'wijmo/wijmo.xlsx';
wjcXlsx.useJSZip(JSZip); */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: AOA = [ [1, 2], [3, 4] ];
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
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			let ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1, raw:true, defval:''}));
      console.log(this.data)
		};
    reader.readAsBinaryString(target.files[0]);

	}

	export(): void {
		/* generate worksheet */
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
		ws['!merges']=[
			{s:{r:1,c:3},e:{r:1,c:12}} ,
			{s:{r:1,c:13},e:{r:1,c:27}},
			{s:{r:2,c:13},e:{r:2,c:17}},
			{s:{r:2,c:18},e:{r:2,c:20}},
			{s:{r:2,c:21},e:{r:2,c:27}},
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
