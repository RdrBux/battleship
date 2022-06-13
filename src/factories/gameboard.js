const Gameboard = () => {
  const ships = [];
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
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const yValue = columns.indexOf(y);

    if (cordinates[y][x - 1] !== undefined) {
      throw new Error('cannot share the same square between multiple ships');
    }

    if (ship.isVertical) {
      if (yValue + ship.length > 10) {
        throw new Error('Out of range');
      }
      for (let i = 0; i < ship.length; i++) {
        cordinates[columns[yValue + i]][x - 1] = [[`${ship.name}`], [i + 1]];
      }
    }
    if (!ship.isVertical) {
      if (x + ship.length > 10) {
        throw new Error('Out of range');
      }

      for (let i = 0; i < ship.length; i++) {
        cordinates[y][x + i - 1] = [[`${ship.name}`], [i + 1]];
      }
    }
    ships.push(ship);
  };

  const receiveAttack = (y, x) => {
    if (cordinates[y][x - 1] === undefined) {
      cordinates[y][x - 1] = 'missed';
    } else if (cordinates[y][x - 1] === 'missed') {
      throw new Error("Can't hit same target multiple times");
    } else {
      const shipName = cordinates[y][x - 1][0][0];
      const shipPlaceHit = cordinates[y][x - 1][1];
      ships.forEach((ship) => {
        if (ship.name === shipName) {
          ship.status[shipPlaceHit - 1] = 'hit';
          cordinates[y][x - 1] = 'hit';
        }
      });
    }
  };

  return { ships, cordinates, placeShip, receiveAttack };
};

export { Gameboard };
