// Generate the random color
function randomColor(){
    let digit = "0123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        color += digit[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval;
document.querySelector("#start").addEventListener("click", function(){
    if(interval) return ;
     interval = setInterval(function(){
        document.querySelector("body").style.backgroundColor = randomColor();
    },1000)
});

document.querySelector("#stop").addEventListener("click", function(){
     clearInterval(interval);
     interval = null;
})
