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
  teams = [];

  constructor(
    private _scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.players = this._scoreService.getPlayers();
    this.teams = this._scoreService.getTeams();
  }

  addPlayer(name) {
    this._scoreService.createPlayer(name);
    this.players = this._scoreService.getPlayers();
    this.playerName = '';
  }

  addTeam(idOne, idTwo) {
    this._scoreService.createTeam(idOne, idTwo);
    this.teams = this._scoreService.getTeams();
  }
}
