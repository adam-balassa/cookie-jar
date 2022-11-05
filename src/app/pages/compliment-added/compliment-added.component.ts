import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compliment-added',
  templateUrl: './compliment-added.component.html',
  styleUrls: ['./compliment-added.component.css']
})
export class ComplimentAddedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 1500);
  }

}
