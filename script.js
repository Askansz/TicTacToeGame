const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(e) {
    const square = e.target;
    if (square.textContent !== '') return;
    square.classList.add(currentPlayer.toLowerCase());
    square.textContent = currentPlayer;
    if (checkForWin()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
        return;
    }
    if (checkForTie()) {
        alert('Tie game!');
        resetGame();
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombos.some(combo => {
        return combo.every(index => {
            return squares[index].textContent === currentPlayer;
        });
    });
}

function checkForTie() {
    return Array.from(squares).every(square => {
        return square.textContent !== '';
    });
}

function resetGame() {
    squares.forEach(square => {
        square.classList.remove('x', 'o');
        square.textContent = '';
    });
    currentPlayer = 'X';
}
