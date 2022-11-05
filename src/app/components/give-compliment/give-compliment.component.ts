import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, subscribeOn } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ComplimentService } from 'src/app/services/compliment.service';

const suggestions = [
  "In my life, I am grateful for ", 
  "I don’t think about that too often but I am ", 
  "I do a lot of thing that I don’t give myself credit for anymore, but, today I ", 
  "The best thing that I enjoyed today with my senses is ", 
  "I would be sad if I lived without ", 
  "Today, I am really appreciative of "
]

@Component({
  selector: 'app-give-compliment',
  templateUrl: './give-compliment.component.html',
  styleUrls: ['./give-compliment.component.css']
})
export class GiveComplimentComponent implements OnInit {
  @Input() invite = false;
  @Input() buttonAction: Function = this.addCompliment;

  complimentText: string = '';
  isSuggested: boolean;
  complimentChanges = new Subject<string>();

  currentImage = 'positive.svg';
  hateSpeech = false;

  constructor(
    private service: ComplimentService, 
    private api: ApiService,
    private router: Router) { 
      this.isSuggested = router.url.endsWith('/suggest');
      this.complimentChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
      ).subscribe(async nextCompliment => {
        const nextPositivity = await this.api.getSentiment(nextCompliment || 'empty text');
        this.hateSpeech = false;
        switch (nextPositivity) {
          case 'positive': this.currentImage = 'positive.svg'; break;
          case 'neutral': this.currentImage = 'neutral.svg'; break;
          case 'mixed': this.currentImage = 'mixed.svg'; break;
          case 'hate': this.currentImage = 'mixed.svg'; this.hateSpeech = true;
        }
      })
    }

  formattedDate = new Date().toDateString().substr(4)

  ngOnInit(): void {
    if (this.isSuggested) {
      this.generateRandomSuggestion()
    }
  }


  onComplimentChange(nextValue: string) {
    this.complimentText = nextValue;
    this.complimentChanges.next(nextValue);
  }

  generateRandomSuggestion() {
    this.complimentText = suggestions[Math.floor(Math.random() * suggestions.length)]
  }

  addCompliment(_: string) {
    if (this.hateSpeech) {
      return;
    }
    this.service.compliments.next([...this.service.compliments.value, {
      displayText: this.complimentText,
      notes: [],
      annotation: '',
      createdDate: this.formattedDate
    }]);
    this.router.navigateByUrl('/added');
  }

}
