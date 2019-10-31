// Objects store related items together
// All related to a single entity
let myBook = {
  //Object properties
  title: "1984",
  author: "George Orwell",
  pageCount: 326
}
// get properties using dot notation
console.log(`${myBook.title} has ${myBook.pageCount} pages and was written by ${myBook.author}`);

// update book title
myBook.title = "Animal Farm";
console.log(`${myBook.title} has ${myBook.pageCount} pages and was written by ${myBook.author}`);

//Challenge area

let person = {
  name: "Ted",
  age: 67,
  location: "Delaware"
}

console.log(`Meet ${person.name}, he is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`Actually ${person.name}, is ${person.age}`);