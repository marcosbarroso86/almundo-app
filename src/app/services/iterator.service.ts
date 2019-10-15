import { Injectable } from '@angular/core';
 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IteratorService {

  iteratorRounds = new BehaviorSubject<number>(0);
  rounds = this.iteratorRounds.asObservable();

  constructor() {}

  public setRoundsIterator: Function = (round:number): void => {
      this.iteratorRounds.next(round);
  }



}
