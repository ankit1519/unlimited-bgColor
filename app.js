const randomColor=function(){
    const hex="01234567789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let interval;
function startChangingColor(){
    if(!interval)  interval=setInterval(cc,1000)
   
    function cc(){
        document.body.style.backgroundColor=randomColor();
    }
    
}
function stopChangingColor(){
    clearInterval(interval)
    interval=null
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)
