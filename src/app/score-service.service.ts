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

  getPlayerOrTeamById(id) {
    const player = db.get('players').find({ id: id }).value();

    if (player !== undefined) {
      return player;
    } else {
      return db.get('teams').find({ id: id }).value();
    }
  }

  getPlayers() {
    const players = db.get('players').value();

    players.sort(this.scoreCalc);

    return players;
  }

  getTeams() {
    const teams = db.get('teams').value();

    teams.sort(this.scoreCalc);

    return teams;
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

  // Utilities

  scoreCalc (a, b) {
    const aWins = parseFloat(a.wins);
    const aLosses = parseFloat(a.losses);
    const aRatio = aWins === 0 && aLosses === 0 ? 0 : (aWins / (aWins + aLosses));
    const bWins = parseFloat(b.wins);
    const bLosses = parseFloat(a.losses);
    const bRatio = bWins === 0 && bLosses === 0 ? 0 : (bWins / (bWins + bLosses));

    if ( aRatio > bRatio ) {
      return -1;
    }

    if ( aRatio < bRatio ) {
      return 1;
    }

    return 0;
  }

}
