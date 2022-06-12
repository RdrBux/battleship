import { Gameboard } from './gameboard';

test('gameboard places ship correctly', () => {
  const gameboard1 = Gameboard();
  const ship1 = {
    name: 'submarine',
    length: 3,
  };
  gameboard1.placeShip('b', 1, ship1);
  expect(gameboard1.cordinates.b).toEqual([
    [['submarine'], [1]],
    [['submarine'], [2]],
    [['submarine'], [3]],
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
  ]);
});

test("gameboard doesn't allow to place items out of range", () => {
  const gameboard2 = Gameboard();
  const ship2 = {
    name: 'submarine',
    length: 3,
  };
  expect(() => gameboard2.placeShip('c', 9, ship2)).toThrow('Out of range');
});
