const config = require('../../config.js');
const axios = require('axios').default;

const response = {
  error: false,
  status: 200,
  body: [
    {
      id: '1234',
      username: 'tapias',
      name: 'tapias',
    },
    {
      id: 'vex2HYKGL-cFUrhygBoBl',
      username: 'paco',
      name: 'Paco Perez Troza',
    },
  ],
};

describe('Test /api/user function list', () => {
  beforeEach(() => {});

  it('GET Method Ok', () => {
    axios.get('http://localhost:3000/api/user').then((res) => {
      expect(typeof res === Object).toBeTruthy;
      expect(res).toEqual(response);
    });
  });
});
