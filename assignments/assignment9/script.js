// Part 1
const quotes = [
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The only thing to we have to fear is fear itself. - Franklin D. Roosevelt",
    "Do the thing every day that scares you. - Benjamin Franklin",
    "Only a life lived for others is a life worthwhile. - Albert Einstein",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not. - Oscar Wilde"
];

const quoteElement = document.getElementById("quote");
let currentIndex = 0;

const showQuotes = () => {
    quoteElement.textContent = quotes[currentIndex];
    currentIndex = (currentIndex + 1) % quotes.length;
};

const intervalID = setInterval(showQuotes, 2000);

window.onload = () => {
    showQuotes();
};

// Part 2