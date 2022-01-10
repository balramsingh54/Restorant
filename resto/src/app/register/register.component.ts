import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RastoService } from '../rasto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    Consfirmpassword : new FormControl('')
  })

    alert:boolean=false;

  constructor(
    private rasto: RastoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginFormData(){
    console.log(this.loginForm.value)
    const usersignup =this.rasto.userdatad(this.loginForm.value).subscribe()
    this.loginForm.reset();
    this.alert=true;
    if(usersignup){
      alert("signup successfull")
      this.loginForm.reset()
      this.router.navigate(['list'])
    }
  }

  alerclose(){
    this.alert=false;
  }

}
