let animationInProgress = false; // Add a flag to track animation state

const bounceBall = () => {
    if (!animationInProgress) {
        let ball = document.getElementById("ball");
        ball.classList.add("bounce");
        
        animationInProgress = true; // Set the flag to true to prevent further animation until it ends
        
        // Listen for the "animationend" event to remove the class after the animation completes
        ball.addEventListener("animationend", () => {
            ball.classList.remove("bounce");
            animationInProgress = false; // Reset the flag after animation ends
        }, { once: true }); // { once: true } ensures that the event listener runs only once
    }
}

window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
};

