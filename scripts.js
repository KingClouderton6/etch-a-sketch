const sketchContainer = document.querySelector('.sketch-container');
const createButton = document.querySelector('#createButton');


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
    const redGrid = document.querySelectorAll('div')

    redGrid.forEach((div) => {
        div.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'red';
        });
    });
}





