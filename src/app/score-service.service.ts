import { Injectable } from '@angular/core';
import { IPlayer } from './IPlayer';
import { ITeam } from './ITeam';
import uuid from 'uuid';
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
    const plrOne = db.get('players').find({ id: playerOneId }).value();
    const plrTwo = db.get('players').find({ id: playerTwoId }).value();
    const teamName = plrOne.name.split(' ')[0] + ' & ' + plrTwo.name.split(' ')[0];
    const team: ITeam = {
        id: uuid(),
        name: teamName,
        wins: 0,
        losses: 0
      };

      db.get('teams')
      .push(team)
      .write();
  }

  addWin(player: IPlayer) {
    player.wins++;
    db.get('players').find({ id: player.id }).assign(player).write();
  }

  addLoss(player: IPlayer) {
    player.losses++;
    db.get('players').find({ id: player.id }).assign(player).write();
  }

}
