const expect = require("chai").expect;

const Player = require("../lib/models/Player");

describe("Create player", () => {
  it("New player should have correct name", () => {
    const player = new Player("Walter Sobchak");

    expect(player.name).to.be.equal("Walter Sobchak");
  });

  it("New player should have score of 0", () => {
    const player = new Player("Walter Sobchak");

    expect(player.score).to.be.equal(0);
  });
  it("New players next frame should be 1", () => {
    const player = new Player("Walter Sobchak");

    expect(player.nextFrame).to.be.equal(1);
  });
});
