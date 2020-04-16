// Select container to append gridCell(s) later (as children).
const container = document.getElementById('container');
const gridHeight = 600;
const gridWidth = 600;
const defaultGridSize = 32**2;

// TODO: Define grid size based on user input.
let gridSize = 32**2;

// Generate div elements based on input and append to container.
for (i = 0 ; i < gridSize ; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList = 'gridCell';

    container.appendChild(gridCell);

    // Add Event Listener to trigger color change.
    gridCell.addEventListener('mouseover', colorChange);
    
}

//Dynamic grid styling based on gridSize.
container.style.gridTemplateColumns = 
'repeat('+ Math.sqrt(gridSize) + ',' + gridWidth / Math.sqrt(gridSize) + 'px)';

container.style.gridTemplateRows = 
'repeat(' + Math.sqrt(gridSize) +',' + gridHeight / Math.sqrt(gridSize) + 'px)';


// Implements the color change when mouse is over target.
function colorChange (e) {
    event.target.style.backgroundColor = '#99CED3';   
}

//Logging
//console.log(document.body);



