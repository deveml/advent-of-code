import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const items = input.split("");

const { length } = items;

// console.log({ items });

let floor = 0;
let index = 0;

for (; index < length && floor !== -1; index++) {
  if (items[index] === "(") {
    floor++;
  } else {
    floor--;
  }
}

console.log({ index });
