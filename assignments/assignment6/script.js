/* animation script */
const bounceBall = () => {
   const ballElement= document.getElementById("ball");
   const bonceButton = document.getElementById("bounce-button");

   //if the ball is bouncing STOP
   if(ballElement.classList.contains("bounce")){
    ballElement.classList.remove("bounce");
    bounceButton.innerHTML ="Start";
   }else{
    ballElement.classList.add("bounce");
    bounceButton.innerHTML="Stop";
   }
   };
   //execute when page loads
   window.onload = () => {
    document.getElementById("bounce-button").onclick=bounceBall;
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
