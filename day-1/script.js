const fs = require("fs");

console.time("Day 1 Challenge");

const data = fs.readFileSync("./input.txt").toString();

let level = 0;
let firstBasement = false;

for (let i = 0; i < data.length; i++) {
  data[i] === "(" ? level++ : level--;
  if (level == -1 && !firstBasement) {
    console.log("First Basement at Position:", i + 1);
    firstBasement = true;
  }
}

console.log("Target Level:", level);

console.timeEnd("Day 1 Challenge");
