// Schackbrädet dynamiskt
const chessboard = document.querySelector('.chessboard');

// Kontrollera att chessboard existerar
if (chessboard) {
    // Pjäserna
    const piece = {
        white: { king: '♔', queen: '♕', rook: '♖', bishop: '♗', knight: '♘', pawn: '♙' },
        black: { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' }
    };

    // Startpositioner för pjäserna
    const initialBoard = [
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
        [], [], [], [],
        ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
        ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
    ];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // Växla mellan vit och svart bakgrund
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            // Lägg till pjäser på rätt positioner
            if (initialBoard[row] && initialBoard[row][col]) {
                const pieceColor = row < 2 ? 'black' : 'white'; // Svarta pjäser högst upp, vita längst ner
                const pieceType = initialBoard[row][col];
                square.textContent = piece[pieceColor][pieceType]; // Lägg till rätt pjäs
            }

            // Lägg till rutan i brädet
            chessboard.appendChild(square);
        }
    }
}