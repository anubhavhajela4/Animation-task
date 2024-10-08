const container = document.getElementById("container");
const bucket =document.getElementById("bucket");
let scoreDisplay=document.getElementById("score");
let heartDisplay=document.getElementById("life");
const startScreen=document.getElementById("startScreen");
const endScreen=document.getElementById("endScreen");
const startButton=document.getElementById("btn1");
const endButton=document.getElementById("btn2");
const finalScore =document.getElementById("finalScore");
let points=0;
let hearts=3;
let gameActive=false;
document.addEventListener('keydown',(event) => {
    let currentPos = bucket.offsetLeft;
    if(event.key==='ArrowLeft') {
        bucket.style.left = `${currentPos - 20}px`;
    }
    if(event.key==='ArrowRight') {
        bucket.style.left = `${currentPos + 20}px`;
    }
    if(currentPos < 38) {
        currentPos =1500;
        bucket.style.left =`${currentPos}px`;
    }
    else if(currentPos >1500) {
        currentPos=38;
        bucket.style.left=`${currentPos}px`;
    }
});

function fallingRain () {
    if(!gameActive) {
        return;
    }
    const drop = document.createElement("div");
    drop.setAttribute("class","rain");
    let pos = Math.random()*1500;
    drop.style.left=`${pos}px`;
    drop.style.top=`${0}px`;
    container.appendChild(drop);
    let fall = 0;
    const verPos = setInterval(()=> {
        if(fall<container.offsetHeight-40) {
            fall+=5;
            drop.style.top =`${fall}px`;
            const dropRect = drop.getBoundingClientRect();
            const bucketRect = bucket.getBoundingClientRect();
            if(dropRect.bottom >=bucketRect.top && dropRect.top <= bucketRect.bottom && dropRect.right >= bucketRect.left && dropRect.left <= bucketRect.right) {
                points++;
                scoreDisplay.innerText =`Score : ${points}`;
                clearInterval(verPos);
                container.removeChild(drop);
            }
        }
        else {
            clearInterval(verPos);
            container.removeChild(drop);
            hearts--;
            heartDisplay.innerText = `Life : ${hearts}`;
            if(hearts<=0) {
                gameActive=false;
                endGame();
            }
        }
    },30);
}
function startGame (){
    startScreen.style.display = "none";
    container.style.display = "block";
    gameActive = true;
    points = 0;
    hearts = 3;
    scoreDisplay.innerText = `Score : 0`;
    heartDisplay.innerText = `Life : 3`;
    setInterval(fallingRain, 2000);
}
function endGame () {
    gameActive = false;
    container.style.display = "none";
    endScreen.style.display = "flex";
    finalScore.innerText = `Your Final Score: ${points}`;
}
startButton.addEventListener("click", startGame);
endButton.addEventListener("click", () => {
    endScreen.style.display = "none";
    startGame();
});

