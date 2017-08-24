import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ScoreService } from '../score-service.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  @Output() SettingsChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() SettingsClosed: EventEmitter<boolean> = new EventEmitter();
  @Input() players = [];
  playerName = '';

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private _scoreService: ScoreService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

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
    if (idOne !== idTwo) {
      this._scoreService.createTeam(idOne, idTwo);
      this.SettingsChanged.emit(true);
    } else {
      this.toastr.error('You cannot create a team of the same person!', 'Oops!');
    }
  }

  clearStorage() {
    this._scoreService.clearAll();
  }

}
