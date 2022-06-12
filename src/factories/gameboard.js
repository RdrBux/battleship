const Gameboard = () => {
  const cordinates = {
    a: [...Array(10)].map((_, i) => '0'),
    b: [...Array(10)].map((_, i) => '0'),
    c: [...Array(10)].map((_, i) => '0'),
    d: [...Array(10)].map((_, i) => '0'),
    e: [...Array(10)].map((_, i) => '0'),
    f: [...Array(10)].map((_, i) => '0'),
    g: [...Array(10)].map((_, i) => '0'),
    h: [...Array(10)].map((_, i) => '0'),
    i: [...Array(10)].map((_, i) => '0'),
    j: [...Array(10)].map((_, i) => '0'),
  };
  const placeShip = (y, x, ship) => {
    if (x + ship.length > 10) {
      throw new Error('Out of range');
    }

    for (let i = 0; i < ship.length; i++) {
      cordinates[y][x + i - 1] = [[`${ship.name}`], [x + i]];
    }
  };

  return { cordinates, placeShip };
};

export { Gameboard };
