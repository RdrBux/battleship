function displayBoard() {
  const board = document.createElement('div');
  board.classList.add('board');
  const xCoordsTitle = document.createElement('div');
  xCoordsTitle.classList.add('row');
  for (let i = 0; i < 11; i++) {
    const squareTitle = document.createElement('div');
    squareTitle.classList = 'square title';
    squareTitle.textContent = `${i === 0 ? '' : i}`;
    xCoordsTitle.appendChild(squareTitle);
  }
  board.appendChild(xCoordsTitle);

  const yCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  yCoords.forEach((coord) => {
    const row = document.createElement('div');
    row.classList.add('row');
    const rowTitle = document.createElement('div');
    rowTitle.classList = 'square title';
    rowTitle.textContent = `${coord}`;
    row.appendChild(rowTitle);
    for (let i = 1; i < 11; i++) {
      const square = document.createElement('div');
      square.classList = `square ${coord}${i}`;
      row.appendChild(square);
    }
    board.appendChild(row);
  });
  return board;
}

export { displayBoard };
