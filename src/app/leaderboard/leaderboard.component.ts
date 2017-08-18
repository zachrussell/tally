import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from '../score-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() title = 'Leader Board';
  @Input() players = [];

  constructor(private _scoreService: ScoreService) { }


  ngOnInit() {

  }

}
