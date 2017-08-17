import { Injectable } from '@angular/core';
import uuid from 'uuid';
import low from 'lowdb';
const db = low('db');


export interface IPlayer {
  id: any;
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
      id: uuid(),
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

  addWin(id) {
    let players = this.getPlayers();
    for (var i = 0; i < players.length; i++) {
      console.log("i", players[i]);
      if (players[i].id == id) {
        players[i].wins += 1;
      }
    }
    console.log('players', players);
  }

}
