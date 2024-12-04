import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee:any;
  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute, private router: Router,
  ) { }

  ngOnInit() {
    const empId: string = this.activatedRoute.snapshot.params['id'];
    this.getEmployee(empId);
  }

  getEmployee(id: string){
    this.employeeService.getEmployee(id).subscribe(response=>{
      this.employee = response;
    })
  }

  deleteEmployee(departmentId: string){
    this.employeeService.deleteEmployees(departmentId).subscribe(response=>{
      this.router.navigate(['/employees']);
    })
  }

}
