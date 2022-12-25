import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8");

const items = input.split("\n");

const ranges: string[] = [];

items.forEach(item => {
    ranges.push(...item.split(','))
})

console.log({ ranges });

const { length } = ranges;

const pair = 2;

let count = 0;

for (let i = 0; i < length; i += pair) {
    const [rangeOneStart, rangeOneLimit] = ranges[i].split('-');
    const [rangeTwoStart, rangeTwoLimit] = ranges[i + 1].split('-');

    console.log({ rangeOneStart, rangeOneLimit })
    console.log({ rangeTwoStart, rangeTwoLimit })

    console.log('')

    const limitDiff = Number(rangeOneLimit) - Number(rangeTwoLimit);

    const startDiff = Number(rangeOneStart) - Number(rangeTwoStart);

    if ((limitDiff >= 0 && startDiff <= 0) || (limitDiff <= 0 && startDiff >= 0)) {
        count ++;
    }
}

console.log({ count })