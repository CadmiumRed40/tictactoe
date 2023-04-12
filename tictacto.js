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
  
  let playerOne = [];
  let playerTwo = [];
  
  let gameOver = false;
  
  for (const element of Object.values(gameBoard)) {
    element.addEventListener('click', () => {
      if (gameOver || playerOne.includes(element) || playerTwo.includes(element)) {
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
      if (a.textContent !== '' && a.textContent === b.textContent && b.textContent === c.textContent) {
        const player = playerOne.length > playerTwo.length ? 'One' : 'Two';
        console.log(`Player ${player} wins!`);
        gameOver = true;
        document.getElementById('win').style.display = 'block';
        document.getElementById('redo').style.display = 'block';
        document.getElementById('player2Button').style.display = 'none';
        document.getElementById('player1Button').style.display = 'none';
        break;
      }
    }
  }
  
  function checkForTie() {
    if (gameOver) {
      return;
    }
    
    if (Object.values(gameBoard).every((cell) => cell.textContent !== '')) {
      console.log('It\'s a tie!');
      gameOver = true;
      const tieEl = document.getElementById('tie');
      tieEl.style.display = 'block';
      document.getElementById('redo').style.display = 'block';
    }
  }
  
  function startOver() {
    for (const element of Object.values(gameBoard)) {
      element.textContent = '';
    }
  
    playerOne = [];
    playerTwo = [];
    gameOver = false;
    
    document.getElementById('tie').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    document.getElementById('redo').style.display = 'none';
  }
  
  document.getElementById('redo').addEventListener('click', startOver)
  