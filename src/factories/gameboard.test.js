import { Gameboard } from './gameboard';

test('gameboard places ship correctly in horizontal position', () => {
  const gameboard1 = Gameboard();
  const ship1 = {
    name: 'submarine',
    length: 3,
    isVertical: false,
  };
  gameboard1.placeShip('b', 1, ship1);
  expect(gameboard1.cordinates.b).toEqual([
    [['submarine'], [1]],
    [['submarine'], [2]],
    [['submarine'], [3]],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

test("gameboard doesn't allow to place ships out of range horizontally", () => {
  const gameboard2 = Gameboard();
  const ship2 = {
    name: 'submarine',
    length: 3,
    isVertical: false,
  };
  expect(() => gameboard2.placeShip('c', 9, ship2)).toThrow('Out of range');
});

test('gameboard places ship correctly in vertical position', () => {
  const gameboard3 = Gameboard();
  const ship3 = {
    name: 'submarine',
    length: 3,
    isVertical: true,
  };
  gameboard3.placeShip('c', 3, ship3);
  expect(gameboard3.cordinates.c).toEqual([
    undefined,
    undefined,
    [['submarine'], [1]],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  expect(gameboard3.cordinates.d).toEqual([
    undefined,
    undefined,
    [['submarine'], [2]],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  expect(gameboard3.cordinates.e).toEqual([
    undefined,
    undefined,
    [['submarine'], [3]],
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
});

test("gameboard doesn't allow to place ships out of range vertically", () => {
  const gameboard2 = Gameboard();
  const ship2 = {
    name: 'submarine',
    length: 3,
    isVertical: true,
  };
  expect(() => gameboard2.placeShip('i', 9, ship2)).toThrow('Out of range');
});

test("gameboard doesn't allow to place multiple ships in the same place", () => {
  const gameboard3 = Gameboard();
  const ship2 = {
    name: 'submarine',
    length: 3,
    isVertical: true,
  };
  const ship3 = {
    name: 'cruiser',
    length: 3,
    isVertical: true,
  };
  gameboard3.placeShip('b', 2, ship2);
  expect(() => gameboard3.placeShip('d', 2, ship3)).toThrow();
});

test('gameboard registers correctly an attack in an empty square', () => {
  const gameboard4 = Gameboard();
  gameboard4.receiveAttack('b', 7);
  expect(gameboard4.cordinates.b[6]).toEqual('missed');
});

test("gameboard doesn't allow to hit the same target multiple times", () => {
  const gameboard5 = Gameboard();
  gameboard5.receiveAttack('c', 3);
  expect(() => gameboard5.receiveAttack('c', 3)).toThrow();
});

test('gameboard registers correctly a hit in a ship', () => {
  const gameboard6 = Gameboard();
  const ship4 = {
    name: 'submarine',
    length: 3,
    isVertical: true,
    status: ['clear', 'clear', 'clear'],
  };
  gameboard6.placeShip('c', 3, ship4);
  gameboard6.receiveAttack('d', 3);
  expect(gameboard6.ships[0].status).toEqual(['clear', 'hit', 'clear']);
});
