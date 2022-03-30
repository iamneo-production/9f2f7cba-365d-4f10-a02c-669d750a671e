import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[
    {
      name: 'Aditya',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Rashi',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Rishik',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
    {
      name: 'Shruti',
      image: "../../assets/images/pngfind.com-placeholder-png-6104451.png",
    },
     

  ]

}
