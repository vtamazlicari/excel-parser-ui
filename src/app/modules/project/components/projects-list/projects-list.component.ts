import { Component, OnInit } from '@angular/core';
import { catchError, takeUntil } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

import { BackendService } from '../../../../shared/services/backend.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  importedProjects = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.get('projects').pipe(
      takeUntil(this.destroy$),
      catchError((error) => throwError(error))
    ).subscribe((projects) => this.importedProjects = projects);
  }

}
