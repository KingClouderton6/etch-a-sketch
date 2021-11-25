const sketchContainer = document.querySelector('.sketch-container');

createGrid(16);

function newGrid(){
    num = 0;
    blankCanvas();
    // gridSize();
    // createGrid(num);
}

const createButton = document.querySelector('#create-grid-btn');
createButton.onclick = newGrid;
let num = 0;


function gridSize (){
    let gridSize = prompt("Please enter canvas size", 16);
    num = gridSize;
}


function createGrid(num){
   
    for(let i = 0; i < num * num; i++){
      const div = document.createElement('div');
        div.classList.add('grid-box');
        div.style.width = `${480/num}px`;
        sketchContainer.appendChild(div);
    }

    paintGridRed();
}


function paintGridRed(){
    const redGrid = document.querySelectorAll('div');

    redGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'red';
        });
    });
}

// Turns the canvas back to white
const clearGridBtn = document.querySelector('#empty-grid-btn');
clearGridBtn.onclick = blankCanvas;

function blankCanvas(){
    const blankCanvas = document.querySelectorAll('div');

    blankCanvas.forEach((div) => {
        div.style.background = 'white';
    });
};

// To function as an eraser (turn divs white)
function turnWhite(){
    const whiteGrid = document.querySelectorAll('div');

    whiteGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'white';
        });
    });
}








