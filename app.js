const startGameBtn = document.querySelector('#start-btn');
const gameboardEle = document.querySelector('#gameboard');

const gameboard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    board.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    })
    gameboardEle.innerHTML = boardHTML;

    return {
      render,
    }
  }
})();

startGameBtn.addEventListener('click', () => {
  // TODO: Start the game
})
