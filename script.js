const container = document.getElementById('container');


// Generate 16 div elements and append to container.
for (i = 0 ; i < 16 ; i++) {
    let gridCell = document.createElement('div')
    gridCell.id = 'gridCell'

    container.appendChild(gridCell);
}


//Logging
console.log(document.body);


