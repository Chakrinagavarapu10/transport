import {Injectable} from '@angular/core';


@Injectable()

export class DataService{
    constructor(){}

    getData(){
        return [
            {
                id:"BDKJVB",
                Name:"JACK",
                sec1:0,
                sec2:0,
                sec3:0,
                sec4:0,
                date:"2018-04-04",
                canEdit:false
              },
              {
                id:"HIY",
                Name:"BINNY",
                sec1:1,
                sec2:1,
                sec3:1,
                sec4:1,
                date:"2018-04-04",
                canEdit:false
              },
              {
                id:"HIY",
                Name:"BINNY",
                sec1:2,
                sec2:2,
                sec3:2,
                sec4:2,
                date:"2018-04-04",
                canEdit:false
              }

        ];

    }
}