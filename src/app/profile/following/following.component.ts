import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[
    {
      name: 'Abhishek',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Rashi',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Rishab',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Shruti',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },

  ]

}
