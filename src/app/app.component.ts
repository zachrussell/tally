import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  players = [];
  teams = [];
  settingsShowing = false;

  constructor(
    private _scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.players = this._scoreService.getPlayers();
    this.teams = this._scoreService.getTeams();
  }

  onSettingsChanged($event) {
    this.teams = this._scoreService.getTeams();
    this.players = this._scoreService.getPlayers();
  }

}
