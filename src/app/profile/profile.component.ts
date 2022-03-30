import { Component, Input, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {  
  constructor(private http: HttpClient) { 

  }
  
  ngOnInit(): void {
  }
  
  object = {
    id: 1,
    name: 'Rishab Dev',
    username: 'rishab_dev_2911',
    image: "../../assets/images/Screenshot 2022-03-30 141416.png", // demo image
    bio: "Hello, this is demo Bio!"
  }


  followers = [
    {
      'id': 2,
      'username': 'rishab',
      'img': "binary::/base64..."
    },
    {
      'id': 3,
      'username': 'Rashi',
      'img': "binary::/base64..."
    },
    {
      'id': 4,
      'username': 'susmita',
      'img': "binary::/base64..."
    },
    {
      'id': 5,
      'username': 'shruti',
      'img': "binary::/base64..."
    }
  ];

  following = [
    {
      'id': 2,
      'username': 'rishik',
      'img': "binary::/base64..."
    },
    {
      'id': 3,
      'username': 'Rashi',
      'img': "binary::/base64..."
    },
    {
      'id': 4,
      'username': 'susmita',
      'img': "binary::/base64..."
    },
    {
      'id': 5,
      'username': 'shruti',
      'img': "binary::/base64..."
    },
  ];

  posts = [
    {
      post_id: 1,
      img: "base64:://"
    },
    {
      post_id: 1,
      img: "base64:://"
    },
    {
      post_id: 2,
      img: "base64:://"
    },
    {
      post_id: 3,
      img: "base64:://"
    },
    {
      post_id: 4,
      img: "base64:://"
    },
    {
      post_id: 5,
      img: "base64:://"
    },
  ]

  videos = ['videoone', 'videohello','videookko','videodede']

  numberOfPosts = this.posts.length + this.videos.length
}