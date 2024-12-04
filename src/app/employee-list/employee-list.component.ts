import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  departmentId;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getEmployeesByDepartment(departmentId: string){
    this.employeeService.getEmployees(departmentId).subscribe(response=>{
      this.employees = response as any[];
    })
  }

  deleteEmployee(departmentId: string){
    this.employeeService.deleteEmployees(departmentId).subscribe(response=>{
      this.getEmployeesByDepartment(departmentId);
    })
  }
  
}
