const Gameboard = () => {
  const cordinates = {
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
  const placeShip = (y, x, ship) => {
    if (!ship.isVertical) {
      if (x + ship.length > 10) {
        throw new Error('Out of range');
      }

      for (let i = 0; i < ship.length; i++) {
        cordinates[y][x + i - 1] = [[`${ship.name}`], [x + i]];
      }
    }
  };

  return { cordinates, placeShip };
};

export { Gameboard };
