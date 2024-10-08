const container = document.getElementById("container");
const bucket =document.getElementById("bucket");
document.addEventListener('keydown',(event) => {
    let currentPos = bucket.offsetLeft;
    if(event.key==='ArrowLeft') {
        bucket.style.left = `${currentPos - 10}px`;
    }
    if(event.key==='ArrowRight') {
        bucket.style.left = `${currentPos + 10}px`;
    }
});
