# Notes

**Label**  
✅ done 🚧 WIP ❌ ERROR

**Challenge**
The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.

## Domains
- The game board is represented by an array of strings with length 9
- Each position of the array represents the move of players X or O
- Player X or O wins with a horizontal line
- Player X or O wins with a vertical line
- Player X or O wins with a diagonal line
- Game ends with a draw (none of players X or O wins)

# Pomodoro 1 🍅:
1. Make sure the input is an array with length 9 ✅
2. Player X wins with a horizontal line, in other words, if the 1st, 2nd and 3nd position of array is filled by player X it wins. ✅

# Pomodoro 2 🍅:
1. Player X wins if (1st, 2nd and 3nd) or (4th, 5th and 6th) or (7th, 8th and 9th) positions of the board is filled. ✅
2. Player O wins if (1st, 2nd and 3nd) or (4th, 5th and 6th) or (7th, 8th and 9th) positions of the board is filled. ✅
3. Create the game which should return status of game ('Player X wins', 'Player O wins', 'Game ends with a draw' or 'Game in progress'). 🚧
