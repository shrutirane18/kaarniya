import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchngo',
  templateUrl: './searchngo.component.html',
  styleUrls: ['./searchngo.component.scss']
})
export class SearchngoComponent implements OnInit {

  constructor(private db: AngularFirestore, private router:Router) { }
  ngos: any;
  selectedstate: any;
  states:any;

  ngOnInit(): void {
    this.getngos();
    this.getstates();
  }
  getngos(){
    this.db.collection("NGOs").snapshotChanges().subscribe(res =>{
      this.ngos =res;
      console.log(this.ngos);})
  }

  getfilterngos(){
    this.db.collection("NGOs",ref=>ref.where("state","==",this.selectedstate)).snapshotChanges().subscribe(res =>{
      this.ngos =res;
      console.log(this.ngos);})
  }
  getstates() {
    this.db.collection("STATES").snapshotChanges().subscribe(res =>{
      this.states = res;
    })
  }
}
