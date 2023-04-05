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
