const { ticTacToe, playerXWins, playerOWins } = require("../src/index");

test("should return false if the board is an array with a length other than 9", () => {
    expect(ticTacToe(['', '', ''])).toBe(false);
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
