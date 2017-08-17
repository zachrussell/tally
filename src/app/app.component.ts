import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  playerName = '';
  players = [];

  constructor(
    private _scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.players = this._scoreService.getPlayers();
  }

  addPlayer(name) {
    this._scoreService.createPlayer(name);
    this.players = this._scoreService.getPlayers();
    this.playerName = '';
  }

  addTeam() {
    console.log('need to implement');
  }
}
