import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const items = input.split("\n");

console.log({ items });

let sum = 0;

items.forEach((item) => {
  const { length } = item;
  const half = length / 2;
  const partOne = item.slice(0, half);
  const partTwo = item.slice(half, length);

  const set1 = new Set(partOne.split(""));
  const set2 = new Set(partTwo.split(""));

  console.log({ set1, set2 });

  set1.forEach((item) => {
    if (set2.has(item)) {
      const priority =
        item.charCodeAt(0) >= 97
          ? item.charCodeAt(0) - 96
          : item.charCodeAt(0) - 38;

      sum += priority;
    }
  });
});
console.log({ sum }, "A".charCodeAt(0) - 38);
