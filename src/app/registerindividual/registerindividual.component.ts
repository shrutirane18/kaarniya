import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registerindividual',
  templateUrl: './registerindividual.component.html',
  styleUrls: ['./registerindividual.component.scss']
})
export class RegisterindividualComponent implements OnInit {

  constructor(private db: AngularFirestore ,private as: AuthService, private router:Router) { }
  donateorvolunteer ="donate";
  state: string = "";
  states: any;
  user:any;
  

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
    this.getstates();
  }


  formregisterindividual = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      donateorvolunteer: new FormControl('', [Validators.required]),
    });
    
    submit() {
      let data = this.formregisterindividual.value;
    data["state"] = this.state;
      this.db.collection("individual").doc(this.user.uid).set(data).then(res => {
        console.log("successful");
        this.formregisterindividual.get("name")?.setValue("");
        this.formregisterindividual.get("email")?.setValue("");
        this.formregisterindividual.get("contact")?.setValue("");
        this.formregisterindividual.get("address")?.setValue("");
        this.formregisterindividual.get("donateorvolunteer")?.setValue("");
        this.state = "";
      })
      .catch(err => {
        console.log(err);
      })
    }
    getstates() {
      this.db.collection("STATES").snapshotChanges().subscribe(res =>{
        this.states = res;
      })
    }

    
}
