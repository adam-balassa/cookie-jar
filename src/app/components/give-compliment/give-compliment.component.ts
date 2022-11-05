import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplimentService } from 'src/app/services/compliment.service';

@Component({
  selector: 'app-give-compliment',
  templateUrl: './give-compliment.component.html',
  styleUrls: ['./give-compliment.component.css']
})
export class GiveComplimentComponent implements OnInit {
  complimentText: string = '';

  constructor(private service: ComplimentService, private router: Router) { }

  formattedDate = new Date().toDateString().substr(4)

  ngOnInit(): void {
  }

  addCompliment() {
    this.service.compliments.next([...this.service.compliments.value, {
      displayText: this.complimentText,
      notes: [],
      annotation: ''
    }]);
    this.router.navigateByUrl('/added');
  }

}
