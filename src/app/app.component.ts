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

  constructor(
    private _scoreService: ScoreService
  ) {}

  ngOnInit() {
    this.players = this._scoreService.getPlayers();
  }

  addPlayer() {
    this._scoreService.createPlayer('Zach Russell');
    this.players = this._scoreService.getPlayers();
  }
  
  addTeam() {
    console.log('need to implement');
  }
}
