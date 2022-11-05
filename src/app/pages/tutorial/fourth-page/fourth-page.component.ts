import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {


  constructor(private router: Router, private tutorial: TutorialService) { }

  ngOnInit(): void {
  }

  done() {
    this.tutorial.completeTutorial();
    this.router.navigateByUrl('/');
  }

}
