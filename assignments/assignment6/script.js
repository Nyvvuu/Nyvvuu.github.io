const bounceBall =() =>{
    let ballElement = document.getElementById("bounce");
    ballElement.classList.add("bounce");
}
window.onload=()=>{
    document.getElementById("bounce-button").onclick = bounceBall;  
    
};