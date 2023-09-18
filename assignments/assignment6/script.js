/* animation script */
let ballElement = document.getElementById("ball");

const bounceBall = () => {
    ballElement.classList.add("bounce");
};

/* hide and show */
window.onload = () => {
    // Initially, remove the "bounce" class to stop the animation
    ballElement.classList.remove("bounce");
    
    document.getElementById("bounce-button").onclick = bounceBall;
};
const image = document.getElementById("image");
const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");

// Add click event listeners to the show and hide buttons
showButton.addEventListener("click", () => {
    // Set the image's display property to "block" to show it
    image.style.display = "block";
});

hideButton.addEventListener("click", () => {
    // Set the image's display property to "none" to hide it
    image.style.display = "none";
});
