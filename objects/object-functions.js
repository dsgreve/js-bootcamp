let myBook = {
  //Object properties
  title: "1984",
  author: "George Orwell",
  pageCount: 326
}

let otherBook = {
  //Object properties
  title: "The Great and Secret Show",
  author: "Clive Barker",
  pageCount: 672
}

let getSummary = function (book) {
  return {
    summary: `${book.title} written by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`

  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary + bookSummary.pageCountSummary)

//Challenge
// Create function take in fahrenheit return object with all three

let fahrenheit = 100;
let celcius = (fahrenheit - 32) * (5 / 9);
let kelvin = celcius + 273.15;

let myTemp = {
  //Object properties
  fahrenheit: 100,
  celcius: (fahrenheit - 32) * (5 / 9),
  kelvin: celcius + 273.15
}

let convertTemp = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celcius: (fahrenheit - 32) * (5 / 9),
    kelvin: celcius + 273.15
  }
}
let temps = convertTemp(74)
console.log(temps)