const container = document.getElementById("container");


let i=0, n=16;
let selectedColor = 'black';

container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`.repeat(n)

const colorSquares = document.querySelectorAll('.color-square');

colorSquares.forEach(square => {
  square.addEventListener('click', e => {
    const color = e.target.id;
    selectedColor = color;
  });
});

container.addEventListener('mouseover', e => {
    if (e.target.classList.contains('cell')) {
      e.target.style.backgroundColor = selectedColor;
    }
});

const sizePicker = document.getElementById("size-picker");

sizePicker.addEventListener('click',e =>{
    inputcells = prompt("How many cells per row should the canvas be?");
    while(inputcells>50){
        inputcells = prompt("That is too many cells :( How many cells per row should the canvas be?");
    }
    n = inputcells;

    container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`.repeat(n)
});

const clearCanvas = document.getElementById("clear");

clearCanvas.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.style.backgroundColor = '';
    });
  });