import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registern-ngo',
  templateUrl: './registern-ngo.component.html',
  styleUrls: ['./registern-ngo.component.scss']
})
export class RegisternNgoComponent implements OnInit {

  constructor(private db: AngularFirestore,private as: AuthService, private router:Router ) { }
  state: string = "";
  states: any;
  user:any;
  ngos: any;

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
    this.getstates();
    
    
  }
  
  formregisterngo = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  submit() {
    // this.db.collection("Ngos").add(this.formregisterngo.value)
    let data = this.formregisterngo.value;
    data["state"] = this.state;
    this.db.collection("NGOs").doc(this.user.uid).set(data).then(res => {
      console.log("successful");
      this.formregisterngo.get("name")?.setValue("");
      this.formregisterngo.get("type")?.setValue("");
      this.formregisterngo.get("email")?.setValue("");
      this.formregisterngo.get("contact")?.setValue("");
      this.formregisterngo.get("address")?.setValue("");
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
