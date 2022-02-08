import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private as: AuthService, private router:Router) { }
  login: boolean = true;

  ngOnInit(): void {
  }
formlogin = new FormGroup(
  {
    email: new FormControl('',[
      Validators.required
      
    ]),
password: new FormControl('',[Validators.required]),
  }
);
formreg = new FormGroup(
  {
    email: new FormControl('',[
      Validators.required
      
    ]),
password: new FormControl('',[Validators.required]),
  }
);

formlog(name: string) {
  return this.formlogin.get(name)!;
}
formregget(name: string) {
  return this.formreg.get(name)!;
}
togglelogin(){
  this.login = !this.login
}

submit(){
  if(this.login){
    this.as.login(this.formlogin.value).then(res =>
      this.router.navigate(['home']));}
  else{
    this.as.signup(this.formreg.value).then(res =>{
      this.login = true;
    })
  }
}
}
