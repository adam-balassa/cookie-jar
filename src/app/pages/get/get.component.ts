import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compliment } from 'src/app/models/compliment';
import { ComplimentService } from 'src/app/services/compliment.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  chosenCompliment: Compliment | null;

  constructor(private service: ComplimentService, private router: Router) { 
    this.chosenCompliment = service.popRandomCompliment();
  }

  ngOnInit(): void {
  }

  putBack() {
    this.service.compliments.next([
      ...this.service.compliments.value,
      this.chosenCompliment!
    ])
    this.router.navigateByUrl('/')
  }

  store() {
    this.router.navigateByUrl('/')
  }

  react(reaction: string) {
    this.chosenCompliment!.reaction = reaction;
  }

}
