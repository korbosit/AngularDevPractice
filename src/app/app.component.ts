import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    @if (isAdmin) {
    <button>Erase database</button>
    } @else {
    <p>You are not authorized.</p>
    }
  `,
})
export class AppComponent {
  isAdmin = false;
}
