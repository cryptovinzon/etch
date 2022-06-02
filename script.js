//const button = document.querySelector('#load');
//button.addEventListener('click', loadGrid);

//window.onload = loadGrid;

//function loadGrid(){
    // let cellSize = 16 prompt('How many squares per side?');
    for (let i=0; i < 16; i++){
        for (let j=0; j < 16; j++) {
        const container = document.querySelector('#container')
        const box = document.createElement('div')

        box.classList.add('box'); // add css class .box
        container.appendChild(box);
        }
    }
//}

const hoverBox = document.querySelectorAll('.box');
hoverBox.forEach(hoverBox => hoverBox.addEventListener('mouseover', highlight));

function highlight(e) {
    this.classList.add('hover');
}

