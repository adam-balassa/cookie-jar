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
}
