import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

}
