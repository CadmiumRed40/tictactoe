//array of the game board
const gameBoard = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six'),
    document.getElementById('seven'),
    document.getElementById('eight'),
    document.getElementById('nine')
];

const playerOne = [];
const playerTwo = [];

gameBoard.forEach((element) => {
    element.addEventListener('click', () => {
        playerOne.push(element)
        console.log(`clicked:${element}`);
        console.log(`Player One:${playerOne}`)
    })

    return 
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

// function for choosing one player game
function onePlayerGame(){
    document.getElementById('player1Button').addEventListener('click', chosen)
    
    function chosen(){
        document.getElementById('player2Button').style.display = 'none'
        alert('One player game chosen!')
    };

}

onePlayerGame()

//function for choosing two player game
/*
function twoPlayerGame(){
    document.getElementById('player2Button').addEventListener('click', chosen)
    
    function chosen(){
        document.getElementById('player1Button').style.display = 'none'
        alert('Two player game chosen')
    };
}
twoPlayerGame()
*/