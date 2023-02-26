import { Component } from '@angular/core';
import { from, map, of } from 'rxjs';


const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers$
.pipe(
map(value => value = 2)

)

.subscribe(value => console.log(value));
numbers$.subscribe(value => console.log(value));

const users = [
{id: 1, name: 'Ryan', age: 25 },
{id: 2, name: 'Shem', age: 25 },
{id: 3, name: 'Keith', age: 60 },
{id: 4, name: 'Zac', age: 25},

]

const users$ = from(users);
users$.subscribe(user => console.log(user));




@Component({
selector: 'app-reactive',
templateUrl: './reactive.component.html',
styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

}