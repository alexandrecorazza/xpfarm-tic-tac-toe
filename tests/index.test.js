const { ticTacToe } = require("../src/index");

test("should return false if the board is an array with a length other than 9", () => {
    expect(ticTacToe(['', '', ''])).toBe(false);
});

test("should return 'Player X wins' if the board is an array filled like ['X', 'X', 'X', '', '', '', '', '', '']", () => {
    expect(ticTacToe(['X', 'X', 'X', '', '', '', '', '', ''])).toBe('Player X wins');
});
