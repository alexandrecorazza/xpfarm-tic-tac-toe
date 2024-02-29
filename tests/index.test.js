const { ticTacToe } = require("../src/index");

test("should return false if the board is an array with a length other than 9", () => {
    expect(ticTacToe(['', '', ''])).toBe(false);
});
