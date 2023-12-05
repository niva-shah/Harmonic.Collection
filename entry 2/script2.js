// JavaScript for sliding and swapping puzzle pieces
const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const shuffleButton = document.getElementById('shuffle-btn');

let emptyPiece = document.getElementById('piece-9'); // The empty piece

// Function to check if two pieces can be swapped
function canSwap(piece) {
    const pieceRect = piece.getBoundingClientRect();
    const emptyRect = emptyPiece.getBoundingClientRect();

    const horizontalDiff = Math.abs(pieceRect.left - emptyRect.left);
    const verticalDiff = Math.abs(pieceRect.top - emptyRect.top);

    return (
        (horizontalDiff === 150 && verticalDiff === 0) || // Horizontal swap
        (verticalDiff === 150 && horizontalDiff === 0)   // Vertical swap
    );
}

// Function to swap two puzzle pieces
function swapPieces(piece) {
    if (canSwap(piece)) {
        const pieceOrder = piece.style.order;
        const emptyOrder = emptyPiece.style.order;

        piece.style.order = emptyOrder;
        emptyPiece.style.order = pieceOrder;

        emptyPiece = piece; // Update the empty piece
    }
}

// Function to handle puzzle piece click
function handlePieceClick(event) {
    const clickedPiece = event.target;
    swapPieces(clickedPiece);
}

// Add click event listeners to each puzzle piece
puzzlePieces.forEach((piece) => {
    piece.addEventListener('click', handlePieceClick);
});

shuffleButton.addEventListener('click', shufflePuzzlePieces);

// Initial shuffle when the page loads
shufflePuzzlePieces();

// Function to shuffle the puzzle pieces
function shufflePuzzlePieces() {
    const shuffledPieces = Array.from(puzzlePieces).sort(() => Math.random() - 0.5);
    shuffledPieces.forEach((piece, index) => {
        piece.style.order = index;
    });
}