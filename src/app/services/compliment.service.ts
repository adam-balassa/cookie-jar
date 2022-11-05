import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscriber, Subscription } from 'rxjs';
import { Compliment } from '../models/compliment';

@Injectable({
  providedIn: 'root'
})
export class ComplimentService implements OnDestroy {
  readonly KEY = 'compliments';
  public compliments = new BehaviorSubject<Compliment[]>([]);
  private subscription: Subscription;

  constructor() {
    this.compliments.next(JSON.parse(localStorage.getItem(this.KEY) ?? '[]'));
    this.subscription = this.compliments.subscribe(nextCompliments => {
      localStorage.setItem(this.KEY, JSON.stringify(nextCompliments));
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  popRandomCompliment(): Compliment | null {
    const compliments = this.compliments.value;
    if (!compliments.length) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const chosenCompliment = compliments.splice(randomIndex, 1)[0];
    this.compliments.next(compliments);
    return chosenCompliment;
  }
}
