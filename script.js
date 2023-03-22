// Initialize variables
let currentPlayer = "X";
let gameStatus = "";
let moveCount = 0;

// Get all the cells on the game board
const cells = document.querySelectorAll(".cell");

// Loop through all the cells and add a click event listener
cells.forEach(cell => {
  cell.addEventListener("click", cellClicked);
});

// Function to handle cell click events
function cellClicked(event) {
  const cell = event.target;
  if (cell.textContent === "" && gameStatus === "") {
    cell.textContent = currentPlayer;
    moveCount++;
    checkGameStatus();
    togglePlayer();
  }
}

// Function to toggle the current player
function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check the game status after each move
function checkGameStatus() {
  // Get all the winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check if any of the winning combinations are complete
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const cell1 = cells[a];
    const cell2 = cells[b];
    const cell3 = cells[c];
    if (
      cell1.textContent === currentPlayer &&
      cell2.textContent === currentPlayer &&
      cell3.textContent === currentPlayer
    ) {
      gameStatus = `${currentPlayer} won!`;
      updateGameStatus();
      return;
    }
  }

  // Check if the game is a draw
  if (moveCount === 9) {
    gameStatus = "It's a draw!";
    updateGameStatus();
    return;
  }
}

// Function to update the game status
function updateGameStatus() {
  const statusDiv = document.querySelector(".game-status");
  statusDiv.textContent = gameStatus;
}
