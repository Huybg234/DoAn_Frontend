import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Employee } from '../../model/employee';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {
  employee: Employee;
  btnDisabled=false;
  url ='http://localhost:8080/login';


  constructor(private rest: RestApiService,
    private data: DataService,
    private router: Router) {
      this.employee=new Employee();
     }

  ngOnInit(): void {
  }
  validate(){
    return true;
  }

  async login(){
    this.btnDisabled=true;

    if(this.validate()){
      this.rest.post(this.url,this.employee).then(data=>{
        let value=data as{employeeId : string ,token:string};
        localStorage.setItem('token',value.token);
        this.router.navigate(['/'])
      })
      .catch(error=>{
        this.data.error(error['error']);
        this.btnDisabled=false;
        
      })
      
    }
  }

}
