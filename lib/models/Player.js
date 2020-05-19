class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
  }

  /**
   * Performs a roll
   * @param {number} score
   */
  addFrame(frame) {}

  /**
   * Calculates player's score from completed rolls.
   * @returns {number} score
   */
  get score() {
    let score = 0;

    return score;
  }

  /**
   * Checks if any more rolls can be performed
   */
  get isGameOver() {
    return this.frames.length >= 10;
  }

  /**
   * Returns number of next frame to be played
   */
  get nextFrame() {
    return this.frames.length + 1;
  }
}

module.exports = Player;
