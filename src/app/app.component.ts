import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = "welcome";
  a = 12
  b = 24

  counter = 0

  IncCounter(){
    this.counter++;
  }
}
