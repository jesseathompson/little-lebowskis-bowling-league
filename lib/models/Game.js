class Game {
  constructor(id) {
    this._id = id;

    this._players = [];
  }

  /**
   * Adds players to the game
   * @param {Player} player
   */
  addPlayer(player) {
    this._players.push(player);
  }

  /**
   * Returns players of the game
   * @returns {object} - Array of Player objects
   */
  get players() {
    return this._players;
  }

  /**
   * Returns player whose turn it currently is
   * @returns {object} - Player object
   */
  get nextPlayer() {
    const currentFrame = this.players[0].frameNumber;
    const playersWaitingForFrame = this.players.filter((player) => {
      return player.frameNumber < currentFrame;
    });
    if (playersWaitingForFrame.length === 0) {
      return this.players[0];
    } else {
      return playersWaitingForFrame[0];
    }
  }
}

module.exports = Game;
