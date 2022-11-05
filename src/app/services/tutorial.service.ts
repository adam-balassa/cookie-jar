import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  readonly KEY = 'tutorialDone';
  public tutorialDone = new BehaviorSubject<boolean>(false);
  private subscription: Subscription;

  constructor() {
    this.tutorialDone.next(localStorage.getItem(this.KEY) === 'done');
    this.subscription = this.tutorialDone.subscribe(nextValue => {
      localStorage.setItem(this.KEY, nextValue ? 'done' : '');
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  completeTutorial() {
    this.tutorialDone.next(true)
  }
}
