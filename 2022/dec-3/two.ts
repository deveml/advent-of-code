import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");

const items = input.split("\n");

let sum = 0;

const chunkSize = 3;

const { length } = items;

console.log({ items })

const itemChunks: string[][] = [];

const sample = items.slice(0, 3);

console.log({ sample })

for (let i = 0; i < length; i += chunkSize) {
  itemChunks.push(items.slice(i, i + chunkSize));
}

console.log({ itemChunks })

const characterMap = new Map<string, number>();
itemChunks.forEach(chunk => {
  chunk.forEach(item => {
    const characters = new Set(item.split(''));
    console.log({ characters })
    characters.forEach(char => {
      const value = characterMap.get(char) || 0;
      characterMap.set(char, value + 1);
    });
  });
  // console.log({ characterMap })
  characterMap.forEach((count, character) => {
    if (count === 3) {
      const priority =
      character.charCodeAt(0) >= 97
        ? character.charCodeAt(0) - 96
        : character.charCodeAt(0) - 38;

    sum += priority;
    }
  });
  characterMap.clear();
});

console.log({ sum, length });