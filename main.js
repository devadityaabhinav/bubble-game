
let bubble=document.getElementById('buuble-area');
function getBub(){
let bub = "";
for(i=0;i<=59;i++){
      
   var y = Math.floor(Math.random()*10);
     bub +=`<div id="bubblee" class="bubble">${y}</div>`;
};
document.querySelector('.play-spc').innerHTML = bub;
};


let time_val = 20;
let stopp;
let timer_show = document.getElementById('play-timer');
stopp = setInterval(()=>{
    if(time_val>0){
        time_val--;
    timer_show.value=time_val;
    }
    else{
        clearInterval(stopp);
        document .querySelector('.play-spc').innerHTML="GAME OVER!! REFRESH PAGE TO START AGAIN..";
    }
},1000);
let score = 0;

let hitNum = document.getElementById("play-hit").value=Math.floor(Math.random()*10);

bubble.addEventListener("click",(dets)=>{
    
    let bubNum  = Number(dets.target.textContent);
    if(bubNum===hitNum){
        document.getElementById("play-score").value=score+=10;
        getBub();
    }
    
    
});
getBub();
