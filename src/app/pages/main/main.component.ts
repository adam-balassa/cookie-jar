import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  person = {
    name: 'Juho',
    fingers: [
      'thumb', 'index', 'middle'
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  raiseFinger(finger: string) {
    console.log(finger);
  }

}
