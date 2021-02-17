const err = require('./error');

describe('Test Function err', () => {
  it('err return type Error', () => {
    expect(typeof err('error', 500) === Error);
  });
});
