import { Component, signal } from '@angular/core';
import { ZoDynamicForm } from '../../projects/zo-dynamic-form/src/lib/zo-dynamic-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [ ZoDynamicForm ],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamic-form');
}
