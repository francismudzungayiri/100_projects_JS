//REST OPERATOR

const names = ["FRANCIS", "NATASHA", "TINAXHE", "SIMBA"];

let [first, ...rest] = names;
first;
rest;

function phones(...args) {
  console.log(args);
  args.forEach((ele) => {
    console.log(ele);
  });
}
phones("iphone", "samsung", "hauwei");

//SPREAD OPERATOR

// it concatenates the 2 into one array
let newnames = [...names, "Motorolla"];
newnames;

// allow us to add new properties seemlessly, below is an example
let book = {
  title: "5am club",
  genres: ["self awareness", "personal development"],
};
let { title, genres } = book;
title;
genres;

const updatedBook = { ...book, publicationDate: "2020 6 June", pages: 258 };
updatedBook;

const upadateGenres = [...genres, "do it yourself"];
upadateGenres;

// TEMPLATE LITERALS

const summary = `${title} my first book I read with`;
summary;

// TERNARY OPERATOR

let x = 80;

let result = 10 > x ? "THATS TRUE" : "THATS FALSE";
console.log(`${result}, you passed the exam`);
