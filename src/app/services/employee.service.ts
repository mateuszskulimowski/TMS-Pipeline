import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getEmployees(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/employees'
    );
  }
}
