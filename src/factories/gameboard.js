const Gameboard = () => {
  const ships = [];
  const coordinates = {
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

  /*   const addToCoordinates = (y, x, text) => {
    coordinates[y][x] = text;
  };
 */
  const placeShip = (y, x, ship) => {
    const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const yValue = columns.indexOf(y);

    if (coordinates[y][x - 1] !== undefined) {
      throw new Error('cannot share the same square between multiple ships');
    }

    if (ship.isVertical) {
      if (yValue + ship.length > 10) {
        throw new Error('Out of range');
      }
      for (let i = 0; i < ship.length; i++) {
        coordinates[columns[yValue + i]][x - 1] = [[`${ship.name}`], [i + 1]];
      }
    }
    if (!ship.isVertical) {
      if (x + ship.length > 10) {
        throw new Error('Out of range');
      }

      for (let i = 0; i < ship.length; i++) {
        coordinates[y][x + i - 1] = [[`${ship.name}`], [i + 1]];
      }
    }
    ships.push(ship);
  };

  const receiveAttack = (y, x) => {
    if (coordinates[y][x - 1] === undefined) {
      coordinates[y][x - 1] = 'missed';
    } else if (
      coordinates[y][x - 1] === 'missed' ||
      coordinates[y][x - 1] === 'hit'
    ) {
      throw new Error("Can't hit same square multiple times");
    } else {
      const shipName = coordinates[y][x - 1][0][0];
      const shipPlaceHit = coordinates[y][x - 1][1];
      ships.forEach((ship) => {
        if (ship.name === shipName) {
          ship.status[shipPlaceHit - 1] = 'hit'; // CHANGE FOR HIT() AND ISSUNK()
          coordinates[y][x - 1] = 'hit';
        }
      });
    }
  };

  const checkAllSunk = {};

  return { ships, coordinates, placeShip, receiveAttack };
};

export { Gameboard };
