import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const games = input.split("\n");

enum GameState {
  WON = "WON",
  DRAW = "DRAW",
  LOSE = "LOSE",
}

const scoreMap = new Map<string, number>();

const pointMap = new Map<string, GameState>();

pointMap.set("X", GameState.LOSE);
pointMap.set("Y", GameState.DRAW);
pointMap.set("Z", GameState.WON);

const lostMap = new Map<string, number>();
lostMap.set("A", 3);
lostMap.set("B", 1);
lostMap.set("C", 2);

const wonMap = new Map<string, number>();
wonMap.set("A", 2);
wonMap.set("B", 3);
wonMap.set("C", 1);

scoreMap.set("A", 1);
scoreMap.set("B", 2);
scoreMap.set("C", 3);

let score = 0;

games.forEach((game) => {
  const [playerA, playerB] = game.split(" ");

  const gameState = pointMap.get(playerB);

  console.log({ gameState });

  if (gameState) {
    if (gameState === GameState.WON) {
      score += (wonMap.get(playerA) || 0) + 6;
    } else if (gameState === GameState.LOSE) {
      score += lostMap.get(playerA) || 0;
    } else {
      score += (scoreMap.get(playerA) || 0) + 3;
    }
  }
});

console.log({ score });
