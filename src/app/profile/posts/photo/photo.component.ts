import { HttpClient } from '@angular/common/http';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  public values:any;

  constructor(private http: HttpClient) {
  }
   public getImage(): Object
   {
     return this.http.get('https://api.imgflip.com/get_memes').toPromise()
       .then((value)=>{
        //  console.log(JSON.stringify(value));
         return value
       })
       .catch((error)=>{
         console.log(error);
         return error;
       })
   }

  ngOnInit(): void {
    this.values = this.getImage();
    // console.log(this.values);
    this.sendItem(this.photo.length);
  }
  photo = [
    {'img': '../../assets/images/pexels-céline-11387232.jpg','likes':5,'comment': 6},
{'img': '../../assets/images/pexels-céline-11387232.jpg','likes':6,'comment': 1}, 
{'img': '../../assets/images/pexels-céline-11387232.jpg','likes':1,'comment': 13}, 
{'img': '../../assets/images/pexels-céline-11387232.jpg','likes':7,'comment': 18},
{'img': '../../assets/images/pexels-céline-11387232.jpg','likes':19,'comment': 11},
{'img': '../../assets/images/pexels-céline-11387232.jpg','likes':26,'comment': 5}
];

@Output() newItem = new EventEmitter();

sendItem(value: any)
{
  this.newItem.emit(value);
}

}
