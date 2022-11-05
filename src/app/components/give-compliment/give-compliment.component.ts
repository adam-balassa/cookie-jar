import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-compliment',
  templateUrl: './give-compliment.component.html',
  styleUrls: ['./give-compliment.component.css']
})
export class GiveComplimentComponent implements OnInit {

  constructor() { }

  formattedDate = new Date().toDateString().substr(4)

  ngOnInit(): void {
  }

}
