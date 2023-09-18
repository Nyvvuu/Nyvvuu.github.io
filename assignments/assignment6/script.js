/* animation script */
let ballElement = document.getElementById("ball");

const bounceBall = () => {
    ballElement.classList.add("bounce");
};

/* hide and show */
const image = document.getElementById("image");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

// Add click event listeners to the show and hide buttons
showButton.addEventListener("click", () => {
    // Set the image's display property to "block" to show it
    image.style.display = "block";
});

hideButton.addEventListener("click", () => {
    // Set the image's display property to "none" to hide it
    image.style.display = "none";
});
