const startGameBtn = document.querySelector('#start-btn');
const gameboardEle = document.querySelector('#gameboard');
const playerOneInput = document.querySelector('#player1');
const playerTwoInput = document.querySelector('#player2');


const gameboard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    board.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    })
    gameboardEle.innerHTML = boardHTML;
  }

  return {
    render,
  }
})();

const Player = (playerName, marker) => {
  return { playerName, marker };
}

const game = (() => {
  let players;
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    const player1 = Player(playerOneInput.value, 'X');
    const player2 = Player(playerTwoInput.value, "O");
    
    players = [player1, player2];
    currentPlayerIndex = 0;
    gameOver = false;

    gameboard.render();
  }

  return { start };
})();

startGameBtn.addEventListener('click', () => {
  game.start(); 
})
