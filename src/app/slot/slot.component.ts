import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score-service.service';
import { IPlayer } from '../IPlayer';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() player: IPlayer = null;
  @Input() position: number = null;

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
  }

  editScore(index) {
    console.log('edit score for ', index);
  }

  addWin(e) {
    this._scoreService.addWin(this.player);
  }

  addLoss(e) {
    this._scoreService.addLoss(this.player);
  }

}
