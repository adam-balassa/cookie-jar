import { Component, Input, OnInit } from '@angular/core';
import { Compliment } from '../../models/compliment';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input()
  compliment!: Compliment;

  constructor() { }

  ngOnInit(): void {
  }

}
