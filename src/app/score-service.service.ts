import { Injectable } from '@angular/core';
import low from 'lowdb';
const db = low('db');

export interface IPlayer {
  name: string;
  wins: number;
  losses: number;
}

@Injectable()
export class ScoreService {

//   db.defaults({ posts: [] })
//   .write()

// // Data is automatically saved to localStorage
// db.get('posts')
//   .push({ title: 'lowdb' })
//   .write()

  constructor() {
    db.defaults({ players: [] }).write();
    db.defaults({ teams: [] }).write();
  }

  getPlayers() {
    return db.get('players').value();
  }

  getTeams() {
    return db.get('teams').value();
  }

  createPlayer(name: string) {
    const player: IPlayer = {
      name: name,
      wins: 0,
      losses: 0
    };

    db.get('players')
    .push(player)
    .write();
  }

  createTeam(playerOneId: number, playerTwoId: number) {
    db.get('teams')
    .push({ playerOne: playerOneId, playerTwo: playerTwoId })
    .write();
  }

}
