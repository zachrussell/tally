import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { ScoreService } from '../score-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() title = 'Leader Board';
  @Input() players = [];
  @Output() playersChanged: EventEmitter<boolean> = new EventEmitter();
  public gradients = null;
  constructor(private _scoreService: ScoreService) { }


  ngOnInit() {
     this.setGradients();
  }

  ngOnChanges(changes: any) {
    this.setGradients();
  }

  onSwipe($event) {
    console.log($event);
    if ($event.offsetDirection === 4) {
      // swipe right
      if (Math.abs($event.deltaX) <= 100) {
        if ($event.target.offsetParent.localName === 'li') {
          $event.target.offsetParent.style.left = Math.abs($event.deltaX) + 'px';
          $event.target.offsetParent.children[0].style.paddingRight = Math.abs($event.deltaX * 4) + 'px';
        } else if ($event.target.localName === 'li') {
          $event.target.style.left = $event.deltaX + 'px';
          $event.target.children[0].style.paddingRight = Math.abs($event.deltaX * 4) + 'px';
        }
      }
    } else if ($event.offsetDirection === 2) {
      // swipe left
      if (Math.abs($event.deltaX) <= 100) {
        if ($event.target.offsetParent.localName === 'li') {
          $event.target.offsetParent.style.right = Math.abs($event.deltaX) + 'px';
          $event.target.offsetParent.children[2].style.paddingLeft = Math.abs($event.deltaX * 4) + 'px';
        } else if ($event.target.localName === 'li') {
          $event.target.style.right = ($event.deltaX * -1) + 'px';
          $event.target.children[2].style.paddingLeft = Math.abs($event.deltaX * 4) + 'px';
        }
      }
    }
  }

  onSwipeEnd($event) {
    let playerId = '';
    let target = null;

    if ($event.target.offsetParent.localName === 'li') {
      target = $event.target.offsetParent;
      playerId = $event.target.offsetParent.id;
    } else if ($event.target.localName === 'li') {
      target = $event.target;
    }

    target.style.left = null;
    target.style.right = null;
    target.children[2].style.paddingLeft = null;
    target.children[0].style.paddingRight = null;
    playerId = target.id;

    if (Math.abs($event.deltaX) >= 100) {
      if ($event.offsetDirection === 4) {
        this._scoreService.addWin(this._scoreService.getPlayerOrTeamById(playerId));
        target.classList.add('confetti');
        setTimeout(function(){
          target.classList.remove('confetti');
        }, 750);
      } else if ($event.offsetDirection === 2) {
        this._scoreService.addLoss(this._scoreService.getPlayerOrTeamById(playerId));
      }

      this.playersChanged.emit(true);
    }
  }

  setGradients() {
    this.gradients = this.gradient('#fa6855', '#c24448', this.players.length);
  }

  gradient(startColor, endColor, steps) {
      const start = {
              'Hex'   : startColor,
              'R'     : parseInt(startColor.slice(1, 3), 16),
              'G'     : parseInt(startColor.slice(3, 5), 16),
              'B'     : parseInt(startColor.slice(5, 7), 16)
      };

      const end = {
              'Hex'   : endColor,
              'R'     : parseInt(endColor.slice(1, 3), 16),
              'G'     : parseInt(endColor.slice(3, 5), 16),
              'B'     : parseInt(endColor.slice(5, 7), 16)
      };

      const diffR = end['R'] - start['R'];
      const diffG = end['G'] - start['G'];
      const diffB = end['B'] - start['B'];

      const stepsHex  = new Array();
      const stepsR    = new Array();
      const stepsG    = new Array();
      const stepsB    = new Array();

      for (let i = 0; i <= steps; i++) {
              stepsR[i] = start['R'] + ((diffR / steps) * i);
              stepsG[i] = start['G'] + ((diffG / steps) * i);
              stepsB[i] = start['B'] + ((diffB / steps) * i);
              stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' +
                                  Math.round(stepsG[i]).toString(16) + '' +
                                  Math.round(stepsB[i]).toString(16);
      }
      return stepsHex;

  }

}
