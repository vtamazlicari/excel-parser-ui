import { Component, OnInit } from '@angular/core';
import {Subject, throwError} from 'rxjs';
import {BackendService} from '@shared/services/backend.service';
import {catchError, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent implements OnInit {

  importedProjects = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.get('projects').pipe(
      takeUntil(this.destroy$),
      catchError((error) => throwError(error))
    ).subscribe((projects) => {
        this.importedProjects = projects.data;
    });
  }

}
