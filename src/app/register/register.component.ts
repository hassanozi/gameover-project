import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService ,private _Router:Router) {

   }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    first_name: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    last_name: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-zA-Z-0-9]{8,15}$')]),
    age: new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)])
  })


  sendData(data:FormGroup){
    console.log(data.value);
    this._AuthService.register(data.value).subscribe({
      next : (res:any) =>{
        console.log(res);
        this._Router.navigate(['login'])
      }
    })
  }
}
