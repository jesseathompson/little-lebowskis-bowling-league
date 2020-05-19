class Player {
  constructor(name) {
    this._name = name;
    this._frames = [];
  }

  /**
   * Performs a roll
   * @param {number} score
   */
  addFrame(frame) {
    if (this.isGameOver) {
      throw "Cannot add more frames";
    }

    this._frames.push(frame);
  }

  /**
   * Calculates player's frame scores from completed rolls.
   * returns list of objects
   */
  get frameScores() {
    let frameScores = [];
    this._frames.forEach((frame, i) => {
      let frameScore;
      //open frame
      if (frame[0] + frame[1] < 10) {
        frameScore = {
          rolls: frame,
          score: frame[0] + frame[1],
        };
      }

      //strike
      else if (this.isFrameStrike(frame) && i < 8) {
        const nextFrame = this._frames[i + 1];
        if (nextFrame && !this.isFrameStrike(nextFrame)) {
          frameScore = {
            rolls: frame,
            score: frame[0] + nextFrame[0] + nextFrame[1],
          };
        } else {
          const nextNextFrame = this._frames[i + 2];
          frameScore = {
            rolls: frame,
            score: frame[0] + nextFrame[0] + nextNextFrame[0],
          };
        }
      }
      //spare
      else if (this.isFrameSpare(frame) && i < 9) {
        const nextFrame = this._frames[i + 1];

        frameScore = {
          rolls: frame,
          score: frame[0] + frame[1] + nextFrame[0],
        };
      }

      //special cases for last frames
      else if (i === 8 && this.isFrameStrike(frame)) {
        const nextFrame = this._frames[i + 1];
        frameScore = {
          rolls: frame,
          score: frame[0] + nextFrame[0] + nextFrame[1],
        };
      } else if (i === 9) {
        frameScore = {
          rolls: frame,
          score: frame[0] + frame[1] + frame[2],
        };
      }
      frameScores.push(frameScore);
    });
    return frameScores;
  }

  get totalScore() {
    const frameScores = this.frameScores;
    let initialValue = 0;
    let sum = frameScores.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.score;
    }, initialValue);

    return sum;
  }
  get frames() {
    return this._frames;
  }
  get name() {
    return this._name;
  }
  /**
   * Checks if frame is a strike
   */

  isFrameStrike(frame) {
    return frame[0] === 10;
  }
  isFrameSpare(frame) {
    return frame[0] + frame[1] === 10 && frame[1] !== 0;
  }
  /**
   * Checks if frame is spare
   */

  /**
   * Checks if any more rolls can be performed
   */
  get isGameOver() {
    return this._frames.length >= 10;
  }

  /**
   * Returns number of next frame to be played
   */
  get frameNumber() {
    return this._frames.length + 1;
  }
}

module.exports = Player;
