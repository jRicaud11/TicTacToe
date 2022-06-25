// Querys
const cells = document.querySelectorAll('#cell');
const board = document.querySelector('.game__board');
// Const
const WINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

// Var
let xTurn = true;



cells.forEach(cell => {
    cell.addEventListener('click', playGame,{once: true})
    
})

//Set Mark
function playGame(e) {
    const currentCell = e.target;
    const currentTurn = xTurn ? 'x' : 'o';
    
    currentCell.classList.add(currentTurn);
    changeTurn();
    setBoard(currentTurn);
}

//Set Board 
function setBoard(currentTurn) {
    board.classList.remove('x');
    board.classList.remove('o');
    
    if (xTurn) {
        board.classList.add('x')
    } else {
        board.classList.add('o')
    }
}

//Check Win

//Check Drawn


//Change Turn
function changeTurn() {
    xTurn = !xTurn;
}