const sketchContainer = document.querySelector('.sketch-container');
const createButton = document.querySelector('#create-grid-btn');
const clearGridBtn = document.querySelector('#empty-grid-btn');



createGrid(64);

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
function blankCanvas(){
    const blankCanvas = document.querySelectorAll('div');

    blankCanvas.forEach((div) => {
        div.style.background = 'white';
    });
};

// sort of broken doens't work on click
function clearGrid(sketchContainer){
    while (sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.firstChild);
    }

}






// To function as an eraser (turn divs white)
function turnWhite(){
    const whiteGrid = document.querySelectorAll('div');

    whiteGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'white';
        });
    });
}








