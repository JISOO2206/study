const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 500;
canvas.height = 500;

context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;

let painting = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  painting = true;
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    context.beginPath();
    context.moveTo(x,y);
  }else{
    context.lineTo(x,y);
    context.stroke();
  }
}

function onMouseDown(event){
  painting = true;
}

function onClickChangeColor(event){
  const thisColor = event.target.style.backgroundColor;
  context.strokeStyle = thisColor;
}

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click",onClickChangeColor))