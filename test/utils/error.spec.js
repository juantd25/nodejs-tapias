const err = require('../../utils/error');

describe('Test Function err', () => {
  it('err return type Error', () => {
    const e = err('error');
    expect(e.statusCode).toBeDefined;
  });
});
