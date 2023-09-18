const bounceBall =() =>{
    let ball = document.getElementById("ball");
    ball.classList.add("bounce");
}
ball.addEventListener("animationend", ()=>{
    ball.classList.remove("bounce");
},{once:true});

window.onload=()=>{
    document.getElementById("bounce-button").onclick = bounceBall;  
    
};