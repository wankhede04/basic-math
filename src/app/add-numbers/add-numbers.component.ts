import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IAdditionValues, ITimeStamps } from '../models/addition';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-numbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.scss']
})
export class AddNumbersComponent implements OnDestroy {
  public inputValue: number;
  public isCorrectValue: boolean;
  public averageSolutionTime: ITimeStamps;
  public correctAnswers: number = 0;

  public calculationValues$: BehaviorSubject<IAdditionValues>;
  public subscription: Subscription;

  constructor() {
    this.calculationValues$ = new BehaviorSubject({
      firstDigit: this.generateAdditionValues(),
      secondDigit: this.generateAdditionValues()
    });

    this.averageSolutionTime = {
      start: Date.now(),
      end: null,
      average: null
    };
  }

  public getInputValue(inputValue: number) {
    this.subscription = this.calculationValues$.pipe(
      take(1),
      tap((calValues) => {
        if (inputValue === calValues.firstDigit + calValues.secondDigit) {
          this.averageSolutionTime.end = Date.now();
  
          this.calculationValues$.next({
            firstDigit: this.generateAdditionValues(),
            secondDigit: this.generateAdditionValues()
          });
  
          this.inputValue = null;
          this.isCorrectValue = true;
          this.correctAnswers++;
  
          this.getAverageTime();
        } else {
          this.isCorrectValue = false;
        }
      })
    ).subscribe();
  }

  public generateAdditionValues(): number {
    return Math.floor(Math.random() * 10)
  }

  public getAverageTime() {
    this.averageSolutionTime.average = (this.averageSolutionTime.end - this.averageSolutionTime.start) / this.correctAnswers;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
