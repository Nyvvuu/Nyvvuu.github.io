const startBouncing = () => {
    const ballElement = document.getElementById("ball");
    
    // Add the "bounce" class to start the animation
    ballElement.classList.add("bounce");
    
    // Listen for the "animationend" event to remove the class after the animation completes
    ballElement.addEventListener("animationend", () => {
        ballElement.classList.remove("bounce");
    }, { once: true }); // { once: true } ensures that the event listener runs only once
};

// Attach the click event listener to the "bounce-button"
document.getElementById("bounce-button").onclick = startBouncing;
