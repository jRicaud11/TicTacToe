// Querys
const cells = document.querySelectorAll('#cell');
const board = document.querySelector('.game__board');
const winMessage = document.getElementById('winMessage');
const winPrompt = document.getElementById('winPrompt');
const rematchBtn = document.querySelector('.rematch__button');
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
let winningComb;


startGame();

rematchBtn.addEventListener('click', rematch);


function startGame(){ 
    cells.forEach(cell => {
        cell.addEventListener('click', playGame,{once: true})
    
    })
}

//Rematch - Clean board
function rematch() {
   cells.forEach(cell => {
       cell.removeEventListener('click', playGame)
       cell.classList.remove('x');
       cell.classList.remove('o')
   })
   winPrompt.classList.remove('show');
   startGame();

}
//Set Mark
function playGame(e) {
    const currentCell = e.target;
    const currentTurn = xTurn ? 'x' : 'o';
    
    setMark(currentCell, currentTurn);
    if (checkWin(currentTurn)) {
        endGame(false)
    } else if (drawn()) { 
        endGame(true)
    } else {
        changeTurn();
        setBoard(currentTurn);
    }
    
    
}

//Set Mark
function setMark (currentCell, currentTurn) {
    currentCell.classList.add(currentTurn);
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
function checkWin (currentTurn) {
    return WINNER.some(combination => {
        return combination.every(idx => {
            return cells[idx].classList.contains(currentTurn)
        })
    })
}
//Check Drawn
function drawn() {
    return [...cells].every(cell => {      /*Deconstruct cells to work it like an Array*/
        return cell.classList.contains('x') || cell.classList.contains('o')
    })   
}

//Change Turn
function changeTurn() {
    xTurn = !xTurn;
}

//End game
function endGame (stat) {
    if (stat) { 
        winMessage.innerHTML = 'Drawn!!'
    } else {
        winMessage.innerHTML = `${xTurn ? "X's" : "O's"} Wins!!`
    }

    winPrompt.classList.add('show')
}