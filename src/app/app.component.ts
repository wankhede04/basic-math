import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public startGame: boolean = false;

  public startPlaying() {
    this.startGame = true
    document.getElementById('start-game').blur();
  }
}
