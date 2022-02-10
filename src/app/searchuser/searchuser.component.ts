import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss']
})
export class SearchuserComponent implements OnInit {

  constructor(private db: AngularFirestore, private router:Router) { }
  user: any;
  selectedstate: any;
  states:any;


  ngOnInit(): void {
    this. getuser();
    this.getstates();
  }
  getuser(){
    this.db.collection("individual").snapshotChanges().subscribe(res =>{
      this.user =res;
      console.log(this.user);

    })
  }
  getfilterindividual(){
    this.db.collection("individual",ref=>ref.where("state","==",this.selectedstate)).snapshotChanges().subscribe(res =>{
      this.user =res;
      console.log(this.user);})
  }

getstates() {
  this.db.collection("STATES").snapshotChanges().subscribe(res =>{
    this.states = res;
  })
}
}
