//array of the game board
const gameBoard =
    [1,2,3,
     4,5,6,
     7,8,9]

//solutions
const solutions = 
    [1,2,3]
    [1,5,9]
    [1,4,7]
    [3,6,9]
    [2,5,8]
    [3,5,7]
    [4,5,6]
    [7,8,9]

const one = document.getElementsByClassName('1').addEventListener('click')
const two = document.getElementsByClassName('2').addEventListener('click')
const three = document.getElementsByClassName('3').addEventListener('click')
const four = document.getElementsByClassName('4').addEventListener('click')
const five = document.getElementsByClassName('5').addEventListener('click')
const six = document.getElementsByClassName('6').addEventListener('click')
const seven = document.getElementsByClassName('7').addEventListener('click')
const eight = document.getElementsByClassName('8').addEventListener('click')
const nine = document.getElementsByClassName('9').addEventListener('click')

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
function twoPlayerGame(){
    document.getElementById('player2Button').addEventListener('click', chosen)
    
    function chosen(){
        document.getElementById('player1Button').style.display = 'none'
        alert('Two player game chosen')
    };
}
twoPlayerGame()