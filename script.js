const container = document.getElementById("container");
const bucket =document.getElementById("bucket");
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
const drop = document.createElement("div");
drop.setAttribute("class","rain");
let pos = `${Math.random()*1500}px`;
container.appendChild(drop);
drop.style.left=pos;

