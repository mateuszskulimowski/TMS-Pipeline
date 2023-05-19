import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamModel } from '../models/team.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private _httpClient: HttpClient) {}

  getTeams(): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(
      'https://6384fca14ce192ac60696c4b.mockapi.io/teams'
    );
  }
}
