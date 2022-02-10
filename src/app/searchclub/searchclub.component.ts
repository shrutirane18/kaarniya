import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchclub',
  templateUrl: './searchclub.component.html',
  styleUrls: ['./searchclub.component.scss']
})
export class SearchclubComponent implements OnInit {

  constructor(private db: AngularFirestore, private router:Router) { }
  club: any;
  selectedstate: any;
  state: any;

  ngOnInit(): void {
    this. getclub();
    this.selectedstate();
  }
  getclub(){
    this.db.collection("clubs").snapshotChanges().subscribe(res =>{
      this.club =res;
      console.log(this.club);

    })
  }
  getfilterclub(){
    this.db.collection("clubs",ref=>ref.where("state","==",this.selectedstate)).snapshotChanges().subscribe(res =>{
      this.club =res;
      console.log(this.club);})
  }
  getstates() {
    this.db.collection("STATES").snapshotChanges().subscribe(res =>{
      this.state = res;
    })
  }
}
