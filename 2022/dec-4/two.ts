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

function overlap(intervalA: string[], intervalB: string[]) {
    return Number(intervalB[0]) <= Number(intervalA[1])
}

for (let i = 0; i < length; i += pair) {
    const intervalA = ranges[i].split('-');
    const intervalB = ranges[i + 1].split('-');


    let toggle = false;
    
    if (Number(intervalA[0]) > Number(intervalB[0])) {
        toggle = overlap(intervalB, intervalA)
    } else {
        toggle = overlap(intervalA, intervalB)
    }
    if (toggle) {
        count ++;
    }
}

console.log({ count, length })