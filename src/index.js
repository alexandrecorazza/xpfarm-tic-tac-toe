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

const game = (board) => {
  const emptyPosition = '';

  if (!Array.isArray(board) || board.length != 9) {
    return {
      gameEnds: true,
      result: 'Invalid board'
    }
  }

  if (!board.includes(emptyPosition) && !playerXWins(board) && !playerOWins(board)) {
    return {
      gameEnds: true,
      result: 'Game ends with a draw'
    }
  } else {
    if (playerXWins(board)) {
      return {
        gameEnds: true,
        result: 'Player X wins'
      }
    } else if (playerOWins(board)) {
      return {
        gameEnds: true,
        result: 'Player O wins'
      }
    } else {
      return {
        gameEnds: false,
        result: 'Game in progress'
      }
    }
  }
}

const setWhichPlayerMovesNext = (counter) => {
  return counter % 2 === 0 ? 'X' : 'O' 
}

const ticTacToe = (board) => {
  return game(board).result;
};
  
module.exports = {
  ticTacToe,
  playerXWins,
  playerOWins,
  setWhichPlayerMovesNext
};