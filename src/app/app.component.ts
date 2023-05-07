import { Component } from '@angular/core';
import { Observable, of, from, filter, range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  numbers$: Observable<number>;
  constructor() {}
}

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


numbers$.subscribe((value) => console.log(value));


numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));


const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
];

const users$ = from(users);
users$.subscribe((user) => console.log(user));

users$
  .pipe(
    map((user) => ({
      id: user.id,
      name: user.name.toUpperCase(),
      age: user.age > 30,
    }))
  )
  .subscribe((user) => console.log(user));

const numbersRange$ = range(1, 10);
numbersRange$.subscribe((value) => console.log(value));

const over30 = users$.pipe(filter((person) => person.age >= 30));
const subscribe = over30.subscribe((val) =>
  console.log(`Over 30: ${val.name.toUpperCase()}`)
);

