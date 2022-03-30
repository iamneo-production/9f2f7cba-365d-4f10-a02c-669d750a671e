import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private shared:SharedService) { }

  username:any;

  ngOnInit(): void {
    this.username=this.shared.getMessage();
    console.log(this.username);
  }

  likes=0
  comments=0
  shares=0

}
