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
  return res.json([gamesList]);
});

app.post("/", async (req, res) => {
  const body = req.body;
  const game = await gameService.createGame(body.names);
  return res.json(game);
});
app.listen(port, () =>
  console.log(`Bowling API listening at http://localhost:${port}`)
);
