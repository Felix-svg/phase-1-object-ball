function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

//get the home and away team names
// function homeTeamName() {
//   let obj = gameObject()
//   return obj['home']['teamName']
// }

// function awayTeamName() {
//   let obj = gameObject()
//   return obj['away']['teamName']
// }

// console.log(`The home team is ${homeTeamName()}`);
// console.log(`The away team is ${awayTeamName()}`);

function numPointsScored(playerName) {
  let obj = gameObject();

  for (const key in obj) {
    const team = obj[key];

    for (const teamType in team) {
      if (teamType === "players") {
        const player = team[teamType][playerName];

        if (player) {
          console.log(`${playerName}: ${player.points} points`);
          return;
        }
      }
    }
  }
}
numPointsScored("Jeff Adrien");

function shoeSize(playerName) {
  let obj = gameObject();

  for (const key in obj) {
    const team = obj[key];

    for (const teamType in team) {
      if (teamType === "players") {
        const player = team[teamType][playerName];

        if (player) {
          console.log(`${playerName}: Shoe size ${player.shoe}`);
          return;
        }
      }
    }
  }
}
shoeSize("Ben Gordon");

function teamColors(teamName) {
  let obj = gameObject();

  for (const key in obj) {
    const team = obj[key];

    if (team.teamName === teamName) {
      console.log(team.colors);
      return;
    }
  }
}
teamColors("Charlotte Hornets");

function teamNames() {
  let obj = gameObject();
  let teamNamesArray = [];

  for (const key in obj) {
    const team = obj[key];

    teamNamesArray.push(team.teamName);
    //console.log(team)
  }
  return teamNamesArray;
}
const teams = teamNames();
console.log(teams);

function playerNumbers(teamName) {
  let obj = gameObject();
  let jerseyNumbersArray = [];

  for (const key in obj) {
    const team = obj[key];
    if (team.teamName === teamName) {
      for (const playerName in team.players) {
        const player = team.players[playerName];
        jerseyNumbersArray.push(player.number);
      }
      //console.log(jerseyNumbersArray);
    }
  }
  return jerseyNumbersArray;
}
const numbers = playerNumbers("Charlotte Hornets");
console.log(numbers);

function playerStats(playerName) {
  let obj = gameObject();
  let playerStatistics = {};

  for (const key in obj) {
    const team = obj[key];

    for (const player in team.players) {
      //const player = team.players[playerKey];
      if (playerName === player) {
        playerStatistics = team.players[playerName];
      }
    }
  }

  return playerStatistics;
}
const stats = playerStats("Bismak Biyombo");
console.log(stats);

function bigShoeRebounds() {
  let obj = gameObject();
  let maxShoeSize = 0;
  let playerWithBiggestShoe = null;

  for (const key in obj) {
    const team = obj[key];
    //console.log(team);
    for (const playerKey in team.players) {
      const player = team.players[playerKey];
      //console.log(player);
      if (player.shoe > maxShoeSize) {
        //console.log(player);
        maxShoeSize = player.shoe;
        playerWithBiggestShoe = {
          playerName: playerKey,
          rebounds: player.rebounds,
        };
      }
    }
  }
  console.log(playerWithBiggestShoe)
}
bigShoeRebounds();

//console.log(gameObject());
