import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-surprise',
  templateUrl: './get-surprise.component.html',
  styleUrls: ['./get-surprise.component.css']
})
export class GetSurpriseComponent implements OnInit {

  compliment: string = '';
  reaction: string | null = null;
  
  constructor(api: ApiService) {
    api.getSurprise().then(surprise => {
      this.compliment = surprise;
    })
  }

  ngOnInit(): void {
  }

  react(reaction: string) {
    this.reaction = reaction;
  }

}
