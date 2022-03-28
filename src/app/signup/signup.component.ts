import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormControl,FormControlName,FormGroup} from '@angular/forms'
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private shared:SharedService) { }

  

  ngOnInit(): void {
  }

  loginUser()
    {
      this.shared.setMessage([this.user?.value]);
    }


  loginForm = new FormGroup(
    {
      user:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z_]{5,20}"), Validators.minLength(5),Validators.maxLength(20)]),
    pass:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'),Validators.minLength(5),Validators.maxLength(20)]),
    first:new FormControl('',[Validators.required]),
    last:new FormControl('',[Validators.required])
    }
  )

  get user()
  {
      return this.loginForm.get('user');
  }

  get pass()
  {
    return this.loginForm.get('pass');
  }


  get firstname()
  {
    return this.loginForm.get('first');
  }

  get lastname()
  {
    return this.loginForm.get('last');
  }

  fnerror()
  {
    if(this.firstname && this.firstname.invalid && this.firstname.touched)
    {
     document.getElementById('userFirstName')?.setAttribute("style","border:2px solid red");
    }

    else
    {
      
      document.getElementById('userFirstName')?.setAttribute("style","border:2px solid green"); 
    }
  }

  lnerror()
  {
    if(this.lastname && this.lastname.invalid && this.lastname.touched)
    {
     document.getElementById('userLastName')?.setAttribute("style","border:2px solid red");
    }

    else
    {
      
      document.getElementById('userLastName')?.setAttribute("style","border:2px solid green"); 
    }
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
