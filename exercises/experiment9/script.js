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

window.addEventListener("beforeunload", () => {
    clearInterval(intervalID);
});

window.onload = () => {
    showQuotes();
};
const rainbowButton = document.getElementById("rainbow-button");
const rainbowContainer = document.getElementById("rainbow");

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const createRainbow = () => {
    rainbowButton.disabled = true;

    const addColorStrip = (color, delay) => {
        setTimeout(() => {
            const colorStrip = document.createElement("p");
            colorStrip.style.backgroundColor = color;
            rainbowContainer.appendChild(colorStrip);
        }, delay);
    };

    let delay = 0;
    rainbowColors.forEach((color) => {
        addColorStrip(color, delay);
        delay += 1000; // Adjust the delay time as needed
    });

    setTimeout(() => {
        const potOfGold = document.createElement("p");
        potOfGold.textContent = "🌟 Pot of Gold 🌟";
        rainbowContainer.appendChild(potOfGold);
        rainbowButton.disabled = false;
    }, delay);
};

rainbowButton.addEventListener("click", createRainbow);
    