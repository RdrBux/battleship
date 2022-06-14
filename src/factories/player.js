const Player = (name = 'Computer', isComputer = false) => {
  const board = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
  };

  const validInput = (arrYX) => {
    if (!board.hasOwnProperty(arrYX[0]) || arrYX[1] < 1 || arrYX[1] > 10) {
      return false;
    }
    if (board[arrYX[0]].includes(arrYX[1])) {
      return false;
    }
    return true;
  };

  const inputCoordinates = (arrYX) => {
    if (validInput(arrYX)) {
      board[arrYX[0]].push(arrYX[1]);
    } else {
      throw new Error('invalid input');
    }
  };

  return { name, inputCoordinates };
};

export { Player };
