import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormControl,FormControlName,FormGroup} from '@angular/forms'
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private shared:SharedService) { }

  

  ngOnInit(): void {
  }

   

  loginForm = new FormGroup(
    {
      user:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z_]{5,20}"), Validators.minLength(5),Validators.maxLength(20)]),
    pass:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'),Validators.minLength(5),Validators.maxLength(20)])
    }
  )

    loginUser()
    {
      this.shared.setMessage([this.user?.value]);
    }

  get user()
  {
      return this.loginForm.get('user');
  }

  get pass()
  {
    return this.loginForm.get('pass');
  }

  error1()
  {
    
    if(this.user && this.user.invalid && this.user.touched)
    {
     document.getElementById('username')?.setAttribute("style","border:2px solid red");
    }

    else
    {
      this.loginUser();
      document.getElementById('username')?.setAttribute("style","border:2px solid green"); 
    }

  }


  error2()
  {
    if(this.pass&& this.pass.invalid && this.pass.touched)
    {
     document.getElementById('password')?.setAttribute("style","border:2px solid red");
    }

    else
    {
      document.getElementById('password')?.setAttribute("style","border:2px solid green"); 
    }
  }
  


}
