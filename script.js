// Select container to append childen later (div's).
const container = document.getElementById('container');

// TODO: Define grid size based on user input.
let gridSize = 16**2;

// Generate div elements based on input and append to container.
for (i = 0 ; i < gridSize ; i++) {
    let gridCell = document.createElement('div');
    gridCell.classList = 'gridCell';

    container.appendChild(gridCell);

    // Add Event Listener to trigger color change.
    gridCell.addEventListener('mouseover', colorChange);
    
}


// Implements the color change when mouse is over target.
function colorChange (e) {
    let cell = document.querySelector('.gridCell');
    event.target.style.backgroundColor = '#f4f4f4';
    
    
}

//Logging
console.log(document.body);
console.log(inputNumber);


