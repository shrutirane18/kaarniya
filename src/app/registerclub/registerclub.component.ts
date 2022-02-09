import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registerclub',
  templateUrl: './registerclub.component.html',
  styleUrls: ['./registerclub.component.scss']
})
export class RegisterclubComponent implements OnInit {

  constructor(private db: AngularFirestore ,private as: AuthService, private router:Router) { }
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
  formregisterclub = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      collgename: new FormControl('', [Validators.required]),
      College_social_welfare_club_Name: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
    submit() {
      // this.db.collection("Ngos").add(this.formregisterngo.value)
      let data = this.formregisterclub.value;
      data["state"] = this.state;
      this.db.collection("clubs").doc(this.user.uid).set(data).then(res => {
        console.log("successful");
        this.formregisterclub.get("email")?.setValue("");
        this.formregisterclub.get("collegename")?.setValue("");
        this.formregisterclub.get("College_social_welfare_club_Name")?.setValue("");
        this.formregisterclub.get("contact")?.setValue("");
        this.formregisterclub.get("address")?.setValue("");
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
