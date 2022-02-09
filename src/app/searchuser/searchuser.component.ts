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

  ngOnInit(): void {
    this. getuser();
  }
  getuser(){
    this.db.collection("individual").snapshotChanges().subscribe(res =>{
      this.user =res;
      console.log(this.user);

    })
  }

}
