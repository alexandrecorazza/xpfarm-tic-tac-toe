const playerXWins = (board) => {
  if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
         (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
         (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
         (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
         (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
         (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
         (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
         (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
      return true;
    } else {
      return false;
    }
}

const playerOWins = (board) => {
  if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
         (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
         (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
         (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
         (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
         (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
         (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
         (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
      return true;
    } else {
      return false;
    }
}

const ticTacToe = (board) => {
  if (!Array.isArray(board) || board.length != 9) {
    return false;
  } else {
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
      return 'Player X wins'
    }
  }
};
  
module.exports = {
  ticTacToe,
  playerXWins,
  playerOWins
};