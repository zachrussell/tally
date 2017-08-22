import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScoreService } from '../score-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Output() SettingsChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() SettingsClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() players = [];
  playerName = '';

  constructor(
    private _scoreService: ScoreService
  ) { }

  ngOnInit() {
  }

  close() {
    this.SettingsClosed.emit(true);
  }

  addPlayer(name) {
    this._scoreService.createPlayer(name);
    this.playerName = '';
    this.SettingsChanged.emit(true);
  }

  addTeam(idOne, idTwo) {
    this._scoreService.createTeam(idOne, idTwo);
    this.SettingsChanged.emit(true);
  }

}
