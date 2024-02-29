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
};