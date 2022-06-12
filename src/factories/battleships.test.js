import { ShipFactory } from './battleships';

test('Object creates with correct length', () => {
  const carrier = ShipFactory(5);
  expect(carrier.length).toBe(5);
});

test('Marks the correct position when hit', () => {
  const battleship = ShipFactory(4);
  battleship.hit(4);
  expect(battleship.status).toEqual(['clear', 'clear', 'clear', 'hit']);
});

test('Marks the correct position when hit multiple times', () => {
  const cruiser = ShipFactory(3);
  cruiser.hit(1);
  cruiser.hit(3);
  expect(cruiser.status).toEqual(['hit', 'clear', 'hit']);
});

test('isSunk returns true if all positions have been hit', () => {
  const destroyer = ShipFactory(2);
  destroyer.hit(1);
  destroyer.hit(2);
  expect(destroyer.isSunk()).toBe(true);
});

test('isSunk only returns true if all positions have been hit', () => {
  const submarine = ShipFactory(3);
  submarine.hit(1);
  submarine.hit(2);
  expect(submarine.isSunk()).toBe(false);
});

test("Saves ship's name", () => {
  const submarine = ShipFactory(3, 'submarine');
  expect(submarine.name).toBe('submarine');
});

test('Ships arrangement is vertical by default', () => {
  const submarine = ShipFactory(3, 'submarine');
  expect(submarine.isVertical).toBe(true);
});

test('Ships arrangement can be initialized as horizontal', () => {
  const submarine = ShipFactory(3, 'submarine', false);
  expect(submarine.isVertical).toBe(false);
});

test('Ship arrangement can be changed after being initialized', () => {
  const submarine = ShipFactory(3, 'submarine', true);
  expect(submarine.isVertical).toBe(true);
  submarine.isVertical = false;
  expect(submarine.isVertical).toBe(false);
});
