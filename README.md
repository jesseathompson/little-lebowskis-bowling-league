# little-lebowskis-bowling-league

# Setup

Project can be setup by running this command:

```
docker-compose up
```

This will bring the dev server up at http://localhost:3000

You can run test by running

```
npm test
```

# Endpoints

The API assumes frames will be submitted in the order as the game is played, data is stored in memory since my main focus was demonstrating knowledge of REST APIs, unit testing, and the scoring aspect

`GET http://localhost:3000` returns a list of all games. Example response:

```
[
        {
            "id": 1,
            "players": [
                {
                    "name": "The Dude",
                    "frameScores": [],
                    "totalScore": 0
                },
                {
                    "name": "Walter",
                    "frameScores": [],
                    "totalScore": 0
                },
                {
                    "name": "Donny",
                    "frameScores": [],
                    "totalScore": 0
                }
            ]
        }
    ]
```

`POST http://localhost:3000` takes a list of names to create a new game. Example request:

```
{
 "names": [
   "The Dude",
   "Walter",
   "Donny"
  ]
}
```

`GET http://localhost:3000/:gameId` returns the current state of the game with a given `gameId`

`POST http://localhost:3000/:gameId/frame` submits a new frame and returns the updated state of the game. Example request for a strike:

```
{
 "frame": [10,0]
}
```

Spare:

```
{
 "frame": [8,2]
}
```

# Notes on things that could improve

1. Additional testing. Test endpoints, gameservice, more thorough tests for score updating as game progresses

2. Better validation. The project largely assumes clients will be sending correct, properly formatted data

3. Storage. Redis could easily replicate the data models if we wanted to throw up something quick. Would need significant refactoring to things like league games, teams, admin API
