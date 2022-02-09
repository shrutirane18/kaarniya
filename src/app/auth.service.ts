import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }
  getUserState(){
    return this.af.authState;
  }
  login(user:any){
    return this.af.signInWithEmailAndPassword(user.email,user.password);

  }
  signup(user:any)
  {

 return this.af.createUserWithEmailAndPassword(user.email,user.password)
    }

  logout(){
    return this.af.signOut();
  }
}
