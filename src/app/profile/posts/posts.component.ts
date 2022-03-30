import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() {
  // console.log(this.len)

   }

  ngOnInit(): void {
  }

  @Input() photos: any = [];

  public len:any;

  sendItem(item:any)
  {
    this.len = item;
  }


}
