const Player = require("./models/Player");
const Game = require("./models/Game");
let service;
class GameService {
  constructor() {
    this._games = [];
  }

  // Only want on instance of gameService at a time
  static instance() {
    if (!service) {
      service = new GameService();
    }

    return service;
  }

  addGameToList(game) {
    this._games.push(game);
  }
  get games() {
    return this._games;
  }

  getGameById(id) {
    return this._games.filter((game) => game.id == id);
  }
  createGame(names) {
    const id = this.games.length + 1;
    const game = new Game(id);
    names.forEach((name) => {
      const newPlayer = new Player(name);
      game.addPlayer(name);
    });
    this.addGameToList(game);
    return game;
  }
}

module.exports = GameService;
