import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplimentService } from 'src/app/services/compliment.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(service: ComplimentService, router: Router, public tutorial: TutorialService) {
    const index = router.url.indexOf('invite=') + 7;
    if (index >= 7) {
      const invite = atob(decodeURIComponent(router.url.substring(index)));
      service.compliments.next([...service.compliments.value, {
        displayText: invite,
        createdDate: new Date().toDateString().substr(4),
        annotation: '',
        notes: []
      }])
      router.navigateByUrl('/get')
    }
  }

  ngOnInit(): void {
  }
}
