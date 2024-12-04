import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(empId: string){
    return this.http.get(`${environment.url}employees/${empId}`);
  }

  getEmployees(deptId: string){
    return this.http.get(`${environment.url}employees/department/${deptId}`);
  }

  deleteEmployees(deptId: string){
    return this.http.delete(`${environment.url}employees/delete/${deptId}`);
  }

}