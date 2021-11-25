const sketchContainer = document.querySelector('.sketch-container');

createGrid(32);



const createButton = document.querySelector('#create-grid-btn');
createButton.onclick = newGrid;
let num = 0;

function newGrid(){
    num = 0;
    blankCanvas();
    clearGrid(sketchContainer);
    gridSize();
    createGrid(num);
}

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

    paintGridBlack();
}

//Red color function and button 
const paintRedBtn = document.querySelector("#paint-red-btn");
paintRedBtn.onclick = paintGridRed;

function paintGridRed(){
    const redGrid = document.querySelectorAll('div');

    redGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'red';
        });
    });
}

// Black color function
const paintBlackBtn = document.querySelector("#paint-black-btn");
paintBlackBtn.onclick = paintGridBlack;

function paintGridBlack(){
    const blackGrid = document.querySelectorAll('div');

    blackGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
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


// Func that deletes all grid squares &
// A piece of code I will never forget, as it taught me the importance of committing early and committing often.
function clearGrid(sketchContainer){
    while (sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.firstChild);
    }

}







