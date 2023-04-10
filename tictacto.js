//array of the game board
const gameBoard = {
    one: document.getElementById('one'),
    two: document.getElementById('two'),
    three: document.getElementById('three'),
    four: document.getElementById('four'),
    five: document.getElementById('five'),
    six: document.getElementById('six'),
    seven: document.getElementById('seven'),
    eight: document.getElementById('eight'),
    nine: document.getElementById('nine')
};

const playerOne = [];
const playerTwo = [];

for (const element of Object.values(gameBoard)) {
    element.addEventListener('click', () => { 
    if (playerOne.includes(element) || playerTwo.includes(element)) {
        return;
        }

        if (playerOne.length === playerTwo.length) {
            element.textContent = 'X'
            playerOne.push(element);
            console.log(`Player One: ${playerOne}`);
        } else {
            element.textContent = 'O';
            playerTwo.push(element);
            console.log(`Player Two: ${playerTwo}`);
        }

        checkForWin();
        checkForTie();
    });
}


/*
gameBoard.forEach((element) => {
    element.addEventListener('click', () => {
        playerOne.push(element)
        console.log(`clicked:${element}`);
        console.log(`Player One:${playerOne}`)
    })
})
*/

//solutions
const solutions = {
    1:[gameBoard.one,gameBoard.two,gameBoard.three],
    2:[gameBoard.one,gameBoard.five,gameBoard.nine],
    3:[gameBoard.one,gameBoard.four,gameBoard.seven],
    4:[gameBoard.three,gameBoard.six,gameBoard.nine],
    5:[gameBoard.two,gameBoard.five,gameBoard.eight],
    6:[gameBoard.three,gameBoard.five,gameBoard.seven],
    7:[gameBoard.four,gameBoard.five,gameBoard.six],
    8:[gameBoard.seven,gameBoard.eight,gameBoard.nine]
};

function checkForWin() {
    for (const solution of Object.values(solutions)) {
        const [a,b,c] = solution;
        if(a.textContent!== '' && a.textContent ===b.textContent && b.textContent === c.textContent){
            console.log(`Player ${playerOne.length > playerTwo.length ? 'One' : 'Two'} wins!`);
            startOver();
            return;
        }
    }
}



function startOver(){
    document.getElementById('redo').addEventListener('click', reset)

    for(const element of Object.values(gameBoard)) {
        element.textContent = ''
    }

    playerOne.length = 0;
    playerTwo.length = 0;

    function reset(){
        document.getElementById('player2Button').style.display = 'block'
        document.getElementById('player1Button').style.display = 'block'

        playerOne.length = 0;
        playerTwo.length = 0;

    }
}

startOver()