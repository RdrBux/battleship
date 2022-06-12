const ShipFactory = (len, name = 'unknown') => {
  const length = len;
  const status = [...Array(len)].map((_, i) => 'clear');
  const hit = (n) => (status[n - 1] = 'hit');
  const isSunk = () => status.every((pos) => pos === 'hit');

  return { name, length, status, hit, isSunk };
};

export { ShipFactory };
