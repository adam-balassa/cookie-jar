import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jar-buttons',
  templateUrl: './jar-buttons.component.html',
  styleUrls: ['./jar-buttons.component.css']
})
export class JarButtonsComponent implements OnInit {

  @Input() 
  disabled!: 'left' | 'right' | null;

  constructor() { }

  ngOnInit(): void {
  }

}
