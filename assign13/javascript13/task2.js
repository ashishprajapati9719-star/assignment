
let marks = [72, 85, 30, 90];

let anyBelow40 = marks.some(mark => mark < 40);

let allAbove35 = marks.every(mark => mark >= 35);

console.log("Any mark below 40:", anyBelow40);
console.log("All marks 35 or more:", allAbove35);
