const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const fillBtn = document.getElementById('jsMode');

canvas.width = 500;
canvas.height = 500;

context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;

let painting = false;
let filling = false;

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

function handleRangeChange(event){
  const size = event.target.value;
  context.lineWidth = size;
}

function handleModeClick(event){
  if(filling === true){
    filling = false;
    fillBtn.innerText = "Fill"
  }else{
    filling = true;
    fillBtn.innerText = "Paint"
  }
}

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click",onClickChangeColor));

if(range){
  range.addEventListener('input', handleRangeChange)
}

if(fillBtn){
  fillBtn.addEventListener('click', handleModeClick)
}