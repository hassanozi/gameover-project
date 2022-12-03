import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }
  errorMessage:string =''; 
  isLoading:boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-zA-Z-0-9]{8,15}$')]),
  })

  sendData(data:FormGroup){
    // console.log(data.value);
    this.isLoading = true;

    this._AuthService.login(data.value).subscribe({
      next : (res:any) =>{
        if (res.message = 'success') {
          // console.log(res);
          this.errorMessage = '';
          this._Router.navigate(['home'])
          this.isLoading = false;
          localStorage.setItem('userToken', res.token);
          this._AuthService.userDataShow();
        }
        else{
          this.errorMessage = res.message;
          this.isLoading = false;
        }
      } ,error :(err:any)=>{
        this.errorMessage = err.message;
        this.isLoading = false;
      }, complete :()=>{
        this.errorMessage = '';
        this.isLoading = false;
      }
    })
  }
}
