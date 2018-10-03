import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { BackendService } from '../../../../shared/services/backend.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  importedProjects = [];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.get('projects').pipe(
      catchError((error) => throwError(error))
    ).subscribe((projects) => {
      this.importedProjects = projects;
      console.log(this.importedProjects);
    });
  }

}
