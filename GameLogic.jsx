// Function to check for five contiguous symbols in a row
const checkHorizontal = (grid, symbol) => {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === symbol) {
        count++;
        if (count === 5) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    count = 0;
  }
  return false;
};

// Function to check for five contiguous symbols in a column
const checkVertical = (grid, symbol) => {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[j][i] === symbol) {
        count++;
        console.log(count);
        if (count === 5) {
          return true;
        }
      } else {
        count = 0;
      }
      //count = 0;
    }
  }
  return false;
};

// Function to check for five contiguous symbols in a column
const checkDiagonal = (grid, symbol) => {
  let count = 0;

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      // Check diagonals from top-left to bottom-right
      for (let i = 0; i < 5; i++) {
        if (
          row + i < grid.length &&
          col + i < grid[row + i].length &&
          grid[row + i][col + i] === symbol
        ) {
          count++;
          if (count === 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }
  }

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      count = 0;
      // Check diagonals from top-right to bottom-left
      for (let i = 0; i < 5; i++) {
        if (row - i >= 0 && col + i < 10 && grid[row - i][col + i] === symbol) {
          count++;
          if (count === 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }
  }
  return false;
};

// Function to check for a win
export const checkForWin = (grid, symbol) => {
  // Check horizontal
  if (checkHorizontal(grid, symbol)) {
    return true;
  }

  // Check vertical
  if (checkVertical(grid, symbol)) {
    return true;
  }

  // Check diagonal
  if (checkDiagonal(grid, symbol)) {
    return true;
  }

  return false;
};
