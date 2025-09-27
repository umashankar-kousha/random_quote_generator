// Quotes Array
const codingQuotes = [
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    text: "Before software can be reusable, it first has to be usable.",
    author: "Ralph Johnson",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    text: "The function of good software is to make the complex appear simple.",
    author: "Grady Booch",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
];

//initializing Dom elements
let quoteEl = document.querySelector(".quote");
let authorEl = document.querySelector(".author");
let copyEl = document.querySelector(".copy-btn");
let nextQuoteEl = document.querySelector(".next-btn");
let randomNumber = 0;

//first quote on refresh
quoteEl.textContent = codingQuotes[randomNumber].text;
authorEl.textContent = "-" + codingQuotes[randomNumber].author;

// generate random quote on next button
nextQuoteEl.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * codingQuotes.length); // givs random index
  quoteEl.textContent = codingQuotes[randomNumber].text;
  authorEl.textContent = "-" + codingQuotes[randomNumber].author;
  copyEl.textContent = "Copy";
});

// quote coppied on copy button click
copyEl.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `${codingQuotes[randomNumber].text}  -  ${codingQuotes[randomNumber].author}`
  );
  copyEl.textContent = "Copied";
});
