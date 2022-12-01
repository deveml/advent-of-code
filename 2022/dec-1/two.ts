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
  const numbers: number[] = [];
  rawText.forEach((text) => {
    const parsedNumber = parseInt(text, 10);
    if (!Number.isNaN(parsedNumber)) {
      numbers.push(parsedNumber);
    }
  });
  const total = numbers.reduce((prev, curr) => {
    return prev + curr;
  });
  results.push(total);
});

const sortedResults = results.sort((a, b) => a - b);

const { length } = sortedResults;

const limit = length - 3;
let sum = 0;

console.log({ index, limit });

for (index = length - 1; index >= limit; index--) {
  console.log(sortedResults[index]);
  sum += sortedResults[index];
}

console.log(sum);
