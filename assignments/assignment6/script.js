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
