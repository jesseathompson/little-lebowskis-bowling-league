const expect = require("chai").expect;

const Player = require("../lib/models/Player");

describe("Create player", () => {
  it("New player should have correct name", () => {
    const player = new Player("Walter Sobchak");

    expect(player.name).to.be.equal("Walter Sobchak");
  });

  it("New players next frame should be 1", () => {
    const player = new Player("Walter Sobchak");

    expect(player.frameNumber).to.be.equal(1);
  });

  describe("Adding frames", () => {
    it("Score should be zero if rolling all gutters", () => {
      const player = new Player("Donny");
      for (let index = 0; index < 10; index++) {
        player.addFrame([0, 0]);
      }

      expect(player.totalScore).to.be.equal(0);
    });

    it("Score should be 300 if rolling all strikes", () => {
      const player = new Player("Donny");
      for (let index = 0; index < 9; index++) {
        player.addFrame([10, 0]);
      }
      player.addFrame([10, 10, 10]);

      expect(player.totalScore).to.be.equal(300);
    });
    it("Score should be 20 if rolling all 1s", () => {
      const player = new Player("Donny");
      for (let index = 0; index < 10; index++) {
        player.addFrame([1, 1]);
      }

      expect(player.totalScore).to.be.equal(20);
    });

    it("Testing spares", () => {
      const player = new Player("Donny");
      for (let index = 0; index < 9; index++) {
        player.addFrame([9, 1]);
      }
      player.addFrame([9, 1, 1]);

      expect(player.totalScore).to.be.equal(182);
    });
  });
});
