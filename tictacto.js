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

gameBoard.forEach((element) => {
    element.addEventListener('click', () => {
        playerOne.push(element)
        console.log(`clicked:${element}`);
        console.log(`Player One:${playerOne}`)
    })
})

//solutions
const solutions = {
    1:[one,two,three],
    2:[one,five,nine],
    3:[one,four,seven],
    4:[three,six,nine],
    5:[two,five,eight],
    6:[three,five,seven],
    7:[four,five,six],
    8:[seven,eight,nine]
}

function startOver(){
    document.getElementById('redo').addEventListener('click', reset)

    function reset(){
        document.getElementById('player2Button').style.display = 'block'
        document.getElementById('player1Button').style.display = 'block'
    }
}

startOver()