import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddDetailsComponent } from '../add-details/add-details.component';
import { DataService } from '../info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,public dialog:MatDialog,private _dataService:DataService) { }
  data=[];
  displayName

  ngOnInit() {
    this.data=this._dataService.getData();
     this.displayName=localStorage.getItem('logName');
  }
 
  
  
  toEdit(d){
   d.canEdit=!d.canEdit;
    // this.editBool=!this.editBool;
  }
  remove(d){
    this.data.splice(d,1);
  }

  toadd(){
    this.data.push({
      id:"HIY",
      Name:"BINNY",
      sec1:0,
      sec2:0,
      sec3:0,
      sec4:0,
      date:"2018-04-04",
      canEdit:false
    });
  }

  logout(){
    this.router.navigate(['']); 
  }
  goToProducts(){
    this.router.navigate(['/products']);
  }
  goToReporting(){
    this.router.navigate(['/reporting']);
}
   goToUsers(){
     this.router.navigate(['/users']);
   }
   goToMembers(){
     this.router.navigate(['/dashboard']);
   }

   openDialog(){
     this.dialog.open(AddDetailsComponent,{
       width:'500px',
       height:'auto'

     });

   }

  

}
