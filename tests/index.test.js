const { 
    ticTacToe,
    playerXWins,
    playerOWins,
    setWhichPlayerMovesNext,
    availablePositionsOnBoard
} = require("../src/index");

test("should return false if the board is an array with a length other than 9", () => {
    expect(ticTacToe(['', '', ''])).toBe('Invalid board');
});

test("should return 'Player X wins' if the board is an array filled like ['X', 'X', 'X', '', '', '', '', '', '']", () => {
    expect(ticTacToe(['X', 'X', 'X', '', '', '', '', '', ''])).toBe('Player X wins');
});

test("should return true if function playerXWins receive a array filled like ['X', 'X', 'X', '', '', '', '', '', '']", () => {
    expect(playerXWins(['X', 'X', 'X', '', '', '', '', '', ''])).toBe(true);
});

test("should return true if function playerOWins receive a array filled like ['X', 'X', 'X', '', '', '', '', '', '']", () => {
    expect(playerOWins(['O', 'O', 'O', '', '', '', '', '', ''])).toBe(true);
});

test("should return 'Game ends with a draw' if the board is an array filled like ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O']", () => {
    expect(ticTacToe(['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'])).toBe('Game ends with a draw');
});

test("should have Player X play next if the move is an even number.", () => {
    expect(setWhichPlayerMovesNext(0)).toBe('X');
});

test("should have Player O play next if the move is an odd number.", () => {
    expect(setWhichPlayerMovesNext(1)).toBe('O');
});

test("should calculate available positions on the board.", () => {
    const dummyBoard = ['X', 'O', 'X', '', 'X', '', 'O', 'X', ''];
    const expectedAvailablePositions = [3, 5, 8];
    
    expect(availablePositionsOnBoard(dummyBoard)).toEqual(expectedAvailablePositions);
});
