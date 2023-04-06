// Game pieces
const one = document.getElementsByClassName('one').addEventListener('click')
const two = document.getElementsByClassName('two').addEventListener('click')
const three = document.getElementsByClassName('three').addEventListener('click')
const four = document.getElementsByClassName('four').addEventListener('click')
const five = document.getElementsByClassName('five').addEventListener('click')
const six = document.getElementsByClassName('six').addEventListener('click')
const seven = document.getElementsByClassName('seven').addEventListener('click')
const eight = document.getElementsByClassName('eight').addEventListener('click')
const nine = document.getElementsByClassName('nine').addEventListener('click')

//array of the game board
const gameBoard =
    [one,two,three,
     four,five,six,
     seven,eight,nine]

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
    
    const playerOne = [];
    const playerTwo = [];

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