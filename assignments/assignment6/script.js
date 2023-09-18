const bounceBall =() =>{
    let ballElement = document.getElementById("ball");
    ballElement.classList.add("bounce");
}
window.onload=()=>{
    document.getElementById("bounce-button").onclick = bounceBall;  
    
};