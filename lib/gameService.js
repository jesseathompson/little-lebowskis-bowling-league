const Player = require("./models/Player");
const Game = require("./models/Game");
let service;
class GameService {
  constructor() {
    this._games = [];
    this._players = [];
  }

  // Only want on instance of gameService at a time
  static instance() {
    if (!service) {
      service = new GameService();
    }

    return service;
  }

  addGameToGameList(game) {
    this._games.push(game);
  }
  get games() {
    return this._games;
  }

  addPlayerToPlayerList(player) {
    this._players.push(player);
  }
  get players() {
    return this._players;
  }

  getGameById(id) {
    // Assumes there will only be one game with a particular id
    // Not ideal
    return this._games.filter((game) => game._id == id)[0];
  }
  submitFrameForGameById(id, frame) {
    const game = this.getGameById(id);
    const player = game.nextPlayer;
    // console.log(JSON.stringify(player));
    player.addFrame(frame);

    return game;
  }
  createGame(names) {
    const id = this.games.length + 1;
    const game = new Game(id);
    names.forEach((name) => {
      const newPlayer = new Player(name);
      game.addPlayer(newPlayer);
    });
    this.addGameToGameList(game);
    return game;
  }
}

module.exports = GameService;
