import boxen from "boxen";
// Message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1️⃣ Classic Box (Default)
const classicBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "classic",
});

console.log(classicBox);

// 2️⃣ SingleDouble Box Style
const singleDoubleBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble",
});

console.log(singleDoubleBox);

// 3️⃣ Round Box Style
const roundBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "round",
});

console.log(roundBox);
