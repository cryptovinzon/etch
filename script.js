
const newGrid = document.querySelector('#grid');
newGrid.addEventListener('click', loadGrid);

//window.onload = loadGrid;

function loadGrid(){
    let cellSize = prompt('How many squares per side?');
    removeGrid();
    resize(cellSize);
    for (let i=0; i < cellSize; i++){
        for (let j=0; j < cellSize; j++) {
        const container = document.querySelector('#container')
        const box = document.createElement('div')

        box.classList.add('box'); // add css class .box
        container.appendChild(box);
        }
    }
    const hoverBox = document.querySelectorAll('.box');
    hoverBox.forEach(hoverBox => hoverBox.addEventListener('mouseover', highlight));
}

function highlight(e) {
    this.classList.add('hover');
}

function resize(cells) {
    let size = document.querySelector('#container');
    size.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    size.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
}

function removeGrid(){
    const cells = document.querySelectorAll('.box');
    cells.forEach(cells => cells.remove());
}