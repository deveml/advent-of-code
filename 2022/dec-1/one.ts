import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const data = input.split("\n\n");

const dataMap = new Map<number, string>();

let index = 0;

data.forEach((item) => {
  dataMap.set(index, item);
  index++;
});

const results: number[] = [];

dataMap.forEach((value, key) => {
  const rawText = value.split("\n");
  const numbers = rawText.map<number>((text) => parseInt(text, 10));
  const total = numbers.reduce((prev, curr) => {
    return prev + curr;
  });
  results.push(total);
});

index = 0;

console.log(results.sort((a, b) => a - b)[results.length - 2]);
