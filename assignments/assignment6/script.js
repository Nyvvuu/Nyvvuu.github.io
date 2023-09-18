const bounceBall = () => {
    let ball = document.getElementById("ball");
    ball.classList.add("bounce");
    
    // Listen for the "animationend" event to remove the class after the animation completes
    ball.addEventListener("animationend", () => {
        ball.classList.remove("bounce");
    }, { once: true }); // { once: true } ensures that the event listener runs only once
}

window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
};
