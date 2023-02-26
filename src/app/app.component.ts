import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes-reactive';
  presentDate = new Date();

  price: number = 2000;

  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'pomegrante'];

  todayO$ = new Observable<Date>((Observer) => {
    setInterval(() => {
      Observer.next(new Date());
    }, 1000);
  });

  decimalNum1: number = 8.7598623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 6.21;
  decimalNum4: number = 7.34;
  decimalNum5: number = .43;
}
