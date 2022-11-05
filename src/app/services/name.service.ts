import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  readonly KEY = 'name';
  public name = new BehaviorSubject<string>('');
  private subscription: Subscription;

  constructor() {
    this.name.next(localStorage.getItem(this.KEY) ?? '');
    this.subscription = this.name.subscribe(nextValue => {
      localStorage.setItem(this.KEY, nextValue);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
