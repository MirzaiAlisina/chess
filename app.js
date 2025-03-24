// Skapa schackbrädet dynamiskt
const chessboard = document.querySelector('.chessboard');

// Skapa 64 rutor och lägg till rätt färg
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Bestäm om rutan ska vara vit eller svart
    if ((Math.floor(i / 8) + i) % 2 === 0) {
        square.classList.add('white');
    } else {
        square.classList.add('black');
    }

    // Lägg till rutan i brädet
    chessboard.appendChild(square);
}
