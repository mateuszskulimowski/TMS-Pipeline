import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private _httpClient: HttpClient) {}

  getProjects(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      'https://6384fca14ce192ac60696c4b.mockapi.io/projects'
    );
  }
}
