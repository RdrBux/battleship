import { Player } from './player';

test('Players cannot put invalid coordinates', () => {
  const player1 = Player();
  expect(() => player1.inputCoordinates(['b', 11])).toThrow();
});

test('Players cannot put invalid coordinates2', () => {
  const player2 = Player();
  expect(() => player2.inputCoordinates(['k', 5])).toThrow();
});

test('Players cannot put the same value twice', () => {
  const player3 = Player();
  player3.inputCoordinates(['d', 7]);
  expect(() => player3.inputCoordinates(['d', 7])).toThrow();
});
