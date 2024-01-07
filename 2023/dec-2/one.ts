import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const items = input.split("\n");

const dimensions: string[][] = [];

items.forEach((dimension) => {
  const [length, width, height] = dimension.split("x");
  dimensions.push([length, width, height]);
});

let totalSize = 0;

dimensions.forEach((dimension) => {
  const [length, width, height] = dimension;
  const parsedLength = parseInt(length);
  const parsedWidth = parseInt(width);
  const parsedHeight = parseInt(height);
  totalSize +=
    2 * parsedLength * parsedWidth +
    2 * parsedWidth * parsedHeight +
    2 * parsedHeight * parsedLength;

  const [a, b] = dimension
    .sort((x, y) => parseInt(x) - parseInt(y))
    .slice(0, 2);

  totalSize += parseInt(a) * parseInt(b);
});

console.log({ totalSize });
