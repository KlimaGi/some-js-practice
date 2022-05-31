// 1.
let one = "one";
let two = "two";
let three = "three";
let four = "four";
let five = "five";

let year = 2022;
let month = 5;
let day = 31;
let hour = 8;
let min = 24;

let is = true;
let sunny = false;

//2.
const today = [2022, 5, 31, 8, "rainy", "calm"];
const lessons = {
  date: today,
  theme: "if else",
  briefly: "elfe",
  tasks: 5,
  tasksDone: 1,
  patience: true,
  ideas: true,
};

// 2.3.
const books = [
  ["online", "pdf", "epub", "paper"],
  "tech IT",
  "psichology",
  "science about human brain",
  "learning techniques",
];
const places = [
  { open: "beach", shadows: "forest", both: "lake", height: "mountain" },
  "quiet places",
  "plain places",
  "wide places",
];
const colors = {
  types: ["cmyk", "rgb", "hex", "name"],
  numbers: 2,
  letters: 1,
  numAndLetters: 1,
};
const brainGames = {
  examples: {
    strategy: "chess",
    sequence: "ruby cube",
    relax: "drawing",
    languagesLearning: "english-spanish",
  },
  shortMemoryTraining: "fast counting",
  concentration: "long reading",
  notes: "write down",
  creation: true,
};

// 3.
console.group("show nested values");
console.log([today[2], today[4]]);
console.log([lessons.date, lessons.patience]);
console.log([books[0][1], books[1], books[4]]);
console.log(places[0].shadows);
console.log(colors.types[2]);
console.log(brainGames.examples.sequence);
console.groupEnd();

// 4.
console.log([today[1], today[2], today[1] > today[2]]);
console.log([
  lessons.patience,
  lessons.ideas,
  lessons.patience && lessons.ideas,
]);

//4.3
let howMany = colors.types.length;
let sum = colors.numbers + colors.letters + colors.numAndLetters;
console.log(howMany === sum);

// 4.4
console.log(books[0].length === colors.types.length);
console.log(brainGames.creation && lessons.ideas);
console.log(lessons.tasks > lessons.tasksDone);
