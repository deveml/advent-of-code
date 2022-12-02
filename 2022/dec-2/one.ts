import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const games = input.split("\n");

const WON = 6;
const DRAW = 3;

const scoreMap = new Map<string, number>();

const hierarchy = new Map<string, string>();

hierarchy.set("A", "Z");
hierarchy.set("B", "X");
hierarchy.set("C", "Y");

scoreMap.set("A", 1);
scoreMap.set("B", 2);
scoreMap.set("C", 3);
scoreMap.set("X", 1);
scoreMap.set("Y", 2);
scoreMap.set("Z", 3);

let score = 0;

games.forEach((game) => {
  const [playerA, playerB] = game.split(" ");

  const scoreA = scoreMap.get(playerA) ?? 0;
  const scoreB = scoreMap.get(playerB) ?? 0;

  console.log({ score });

  if (hierarchy.get(playerA) === playerB) {
    score += scoreB;
  } else if (scoreA === scoreB) {
    score += scoreB + DRAW;
  } else {
    score += scoreB + WON;
  }
});

console.log({ score });
