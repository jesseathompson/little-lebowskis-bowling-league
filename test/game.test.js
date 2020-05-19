const expect = require("chai").expect;

const Player = require("../lib/models/Player");
const Game = require("../lib/models/Game");

describe("Game tests", () => {
  it("Test adding players", () => {
    const game = new Game();
    const playerOne = new Player("Walter Sobchak");
    const playerTwo = new Player("Donny");

    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    expect(game.players[0].name).to.be.equal("Walter Sobchak");
    expect(game.players[1].name).to.be.equal("Donny");

    let nextPlayer = game.nextPlayer;
    expect(nextPlayer.name).to.be.equal("Walter Sobchak");
    nextPlayer.addFrame([10, 0]);
    nextPlayer = game.nextPlayer;
    expect(nextPlayer.name).to.be.equal("Donny");
  });
});
