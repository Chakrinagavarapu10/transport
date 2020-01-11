import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../info.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  constructor(private _dataService:DataService) { }
  data=[];
  ngOnInit() {
    this.data=this._dataService.getData();


  }

  enterDetails=new FormGroup(
    {
       reg :new FormControl(''),
       name:new FormControl(''),
      firstsec:new FormControl(''),
      Secondsec:new FormControl(''),
      Thirdsec:new FormControl(''),
      Fourthsec:new FormControl(''),
      datee:new FormControl('')
    }
  );

  topush(){
    alert("jgfjgcgn");

  }

}
