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

  ngOnInit(): void {
    this. getclub();
  }
  getclub(){
    this.db.collection("clubs").snapshotChanges().subscribe(res =>{
      this.club =res;
      console.log(this.club);

    })
  }

}
