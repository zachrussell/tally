import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  @Input() title = 'Leader Board';

  @Input() players = [
    {
      name: 'Jerry Wood',
      wins: 45,
      losses: 23
    },
    {
      name: 'Brandon Barnes',
      wins: 43,
      losses: 23
    },
    {
      name: 'Raymond Knight',
      wins: 40,
      losses: 23
    },
    {
      name: 'Trevor McCormick',
      wins: 20,
      losses: 23
    },
    {
      name: 'Thom Martinez',
      wins: 1,
      losses: 23    }
  ];

  constructor() { }

  ngOnInit() {
  }

  editScore(index) {
    console.log('edit score for ', index);
  }

}
