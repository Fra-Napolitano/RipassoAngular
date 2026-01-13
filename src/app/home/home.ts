import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greetings, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  keyUpHandler(event: KeyboardEvent) {
    console.log(`l'utente ha cliccato ${event.key} `);
  }
  homeMessage = signal('Hello, World! from homeComponent');
}
