const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json());

const gameService = require("./lib/gameService").instance();

app.get("/", (req, res) => {
  const gamesList = gameService.games;
  if (!gamesList) {
    return res.sendStatus(204); //no content
  }
  const formattedGames = gamesList.map((game) => {
    return formatGame(game);
  });
  return res.json([formattedGames]);
});

app.post("/", (req, res) => {
  const body = req.body;
  const game = gameService.createGame(body.names);
  const formattedGame = formatGame(game);

  return res.json(formattedGame);
});

app.get("/:gameId", (req, res) => {
  const { gameId } = req.params;
  const game = gameService.getGameById(1);
  const formattedGame = formatGame(game);

  return res.json(formattedGame);
});

app.post("/:gameId/frame", (req, res) => {
  const { gameId } = req.params;

  const body = req.body;
  const game = gameService.submitFrameForGameById(gameId, body.frame);
  const formattedGame = formatGame(game);

  return res.json(formattedGame);
});

app.listen(port, () =>
  console.log(`Bowling API listening at http://localhost:${port}`)
);

function formatGame(game) {
  const id = game._id;

  let players = [];

  game.players.forEach((player) => {
    const name = player.name;
    // let frameScores, totalScore;
    // if (pla) {
    // }
    const frameScores = player.frameScores;
    const totalScore = player.totalScore;

    players.push({
      name,
      frameScores,
      totalScore,
    });
  });

  /**
   * Helper function to format and display scores
   */
  const formattedGame = {
    id,
    players,
  };

  return formattedGame;
}
