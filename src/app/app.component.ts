import { Component } from '@angular/core';
import { ComplimentService } from './services/compliment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookie-jar';
  constructor(public complimentService: ComplimentService) {
    
  }
}
