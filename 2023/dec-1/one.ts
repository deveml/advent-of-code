import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const items = input.split("");

// console.log({ items });

let floor = 0;

items.forEach((item) => {
  if (item === "(") {
    floor++;
  } else {
    floor--;
  }
});

console.log({ floor });
