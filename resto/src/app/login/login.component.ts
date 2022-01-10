import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // username:string;
  // password:string;

  loginform= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  constructor( 
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginFormData(){
    this.http.get<any>("http://localhost:3000/users").subscribe((result)=>{
      const user= result.find((a:any)=>{
        return a.username== this.loginform.value.name && a.password == this.loginform.value.password
      })
      if(user){
        alert("login successfull")
        this.loginform.reset()
        this.router.navigate(['list'])
      }
      else{
        alert("user not found")
      }
    })
  }

  get user_name(){
    return this.loginform.get('username')
  }

    get user_password(){
    return this.loginform.get('password')
  }


}
