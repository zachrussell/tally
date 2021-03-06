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

  public leftSideOffset: number = null;
  public rightSideOffset: number = null;

  public menuShowing = false;

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
  }

  editScore(index) {
    console.log('edit score for ', index);
  }

  calcRatio() {
    if (this.player.wins + this.player.losses === 0) {
      return 0;
    } else {
      return this.player.wins / (this.player.wins + this.player.losses);
    }
  }

  // addWin(e) {
  //   this._scoreService.addWin(this.player);
  // }

  // addLoss(e) {
  //   this._scoreService.addLoss(this.player);
  // }
}
