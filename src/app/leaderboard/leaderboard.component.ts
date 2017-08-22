import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { ScoreService } from '../score-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() title = 'Leader Board';
  @Input() players = [];
  public gradients = null;
  constructor(private _scoreService: ScoreService) { }


  ngOnInit() {
     this.setGradients();
  }

  ngOnChanges(changes: any) {
    this.setGradients();
  }

  onSwipeLeft($event) {
    console.log('swipe left', $event);
    if ($event.target.offsetParent.localName === 'li') {
      $event.target.offsetParent.style.right = Math.abs($event.deltaX) + 'px';
    } else if ($event.target.localName === 'li') {
      $event.target.style.right = ($event.deltaX * -1) + 'px';
    }
  }

  onSwipeRight($event) {
    console.log('swipe right', $event.deltaX);
    if ($event.target.offsetParent.localName === 'li') {
      $event.target.offsetParent.style.left = Math.abs($event.deltaX) + 'px';
    } else if ($event.target.localName === 'li') {
      $event.target.style.left = $event.deltaX + 'px';
    }
  }

  onSwipeEnd($event) {
    console.log($event);
    if ($event.target.offsetParent.localName === 'li') {
      $event.target.offsetParent.style.left = null;
      $event.target.offsetParent.style.right = null;
    } else if ($event.target.localName === 'li') {
      $event.target.offsetParent.style.left = null;
      $event.target.offsetParent.style.right = null;
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
