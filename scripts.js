const sketchContainer = document.querySelector('.sketch-container');
const createButton = document.querySelector('#createButton');
const div = document.createElement('div');

createGrid(64);

function createGrid(num){
   

    for(let i = 0; i < num * num; i++){
       const div = document.createElement('div');
        div.classList.add('grid-box');
        div.style.width = `${480/num}px`;
        sketchContainer.appendChild(div);
    }

    return;
}




