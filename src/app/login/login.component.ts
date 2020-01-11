import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 emailTemp:string;


  constructor(private router: Router) { 
  
    
    

   
  }
   details=[
    {
      "mail":"testuser@gmail.com",
      "pwd":"9259@cHA"
    }
    
  ]
  profile=new FormGroup(
    {
      // name :new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
      email:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^\w+@[a-z0-9A-Z_]+?\.[a-zA-Z]{2,5}$/)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    }
  );

  verify(){
       let emailVar=this.profile.get('email').value;
       let passVar = this.profile.get('password').value

    if(this.details[0].mail== emailVar && this.details[0].pwd == passVar)
    {
       this.emailTemp=emailVar.substring(0,emailVar.lastIndexOf("@"));
       localStorage.setItem('logName',this.emailTemp);
    this.router.navigate(['/dashboard']); 
    }
    else{
      alert("Enter valid credentials")
    }
  }

  ngOnInit() {
  }

}
