import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tagged',
  templateUrl: './tagged.component.html',
  styleUrls: ['./tagged.component.css']
})
export class TaggedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tagged = ['tagged1', 'taggedtwo', 'taggedthree']


}
