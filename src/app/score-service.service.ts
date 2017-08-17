import { Injectable } from '@angular/core';
import low from 'lowdb';
const db = low('db');

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
    db.get('players')
    .push({ name: name, score: 0 })
    .write();
  }

  createTeam(playerOneId: number, playerTwoId: number) {
    db.get('teams')
    .push({ playerOne: playerOneId, playerTwo: playerTwoId })
    .write();
  }

}
