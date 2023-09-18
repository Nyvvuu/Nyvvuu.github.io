const bounceBall = () => {
    let ball = document.getElementById("ball");
    
    // Remove any existing animation classes
    ball.classList.remove("bounce");
    
    // Trigger a reflow to reset the animation
    void ball.offsetWidth;
    
    // Add the animation class back to start the animation
    ball.classList.add("bounce");
}
