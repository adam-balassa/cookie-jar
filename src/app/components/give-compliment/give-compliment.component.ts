import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplimentService } from 'src/app/services/compliment.service';

const suggestions = [
  'A good thing that happened today is, '
]

@Component({
  selector: 'app-give-compliment',
  templateUrl: './give-compliment.component.html',
  styleUrls: ['./give-compliment.component.css']
})
export class GiveComplimentComponent implements OnInit {
  complimentText: string = '';
  isSuggested: boolean;

  constructor(private service: ComplimentService, 
    private router: Router) { 
      this.isSuggested = router.url.endsWith('/suggest');
    }

  formattedDate = new Date().toDateString().substr(4)

  ngOnInit(): void {
    if (this.isSuggested) {

    }
  }

  generateRandomSuggestion() {
    this.complimentText = suggestions[Math.floor(Math.random() * suggestions.length)]
  }

  addCompliment() {
    this.service.compliments.next([...this.service.compliments.value, {
      displayText: this.complimentText,
      notes: [],
      annotation: '',
      createdDate: this.formattedDate
    }]);
    this.router.navigateByUrl('/added');
  }

}
