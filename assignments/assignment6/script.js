let ballElement = document.getElementById("ball");

const bounceBall = () => {
    ballElement.classList.add("bounce");
};

window.onload = () => {
    // Initially, remove the "bounce" class to stop the animation
    ballElement.classList.remove("bounce");
    
    document.getElementById("bounce-button").onclick = bounceBall;
};

