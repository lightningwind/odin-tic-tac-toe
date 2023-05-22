const startGameBtn = document.querySelector('#start-btn');
const restartGameBtn = document.querySelector('#restart-btn');
const gameboardEle = document.querySelector('#gameboard');
const playerOneInput = document.querySelector('#player1');
const playerTwoInput = document.querySelector('#player2');


// A gameboard module responsible for drawing the gameboard
const gameboard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    // Step 1: Create the squares in HTML
    let boardHTML = '';
    board.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    })
    gameboardEle.innerHTML = boardHTML;

    // Step 2: Add click event listeners to each square
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('click', game.handleClick);
    })
  }

  const update = (index, value) => {
    board[index] = value;
    render();
  }

  const getBoard = () => {
    return board;
  }

  const setBoard = (index, value) => {
    board[index] = value;
  }

  return { render, update, getBoard, setBoard };
})();

// A Player factory
const Player = (playerName, marker) => {
  return { playerName, marker };
}

// A game module responsible for all the logic
const game = (() => {
  let players;
  let currentPlayerIndex; // value is either a 0 or a 1
  let gameOver;

  const start = () => {
    const player1 = Player(playerOneInput.value, 'X');
    const player2 = Player(playerTwoInput.value, 'O');
    
    players = [player1, player2];
    currentPlayerIndex = 0;
    gameOver = false;

    gameboard.render();
  }

  const restart = () => {
    for (let i = 0; i < 9; i++) {
      gameboard.setBoard(i, '');
    }
    gameboard.render();
  }

  const handleClick = (e) => {
    // Extract the index of this square using string manipulation
    const index = parseInt(e.target.id.split('-')[1]);

    if (gameboard.getBoard()[index] !== '') {
      return; // Spot's taken
    }

    gameboard.update(index, players[currentPlayerIndex].marker);
    currentPlayerIndex = Number(!currentPlayerIndex);
  }

  return { start, restart, handleClick };
})();

startGameBtn.addEventListener('click', () => {
  game.start(); 
})

restartGameBtn.addEventListener('click', () => {
  game.restart();
})
