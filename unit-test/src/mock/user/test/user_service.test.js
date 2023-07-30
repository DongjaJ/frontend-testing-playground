const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');

describe('userService', () => {
  let userService;
  const login = jest.fn(async (id, password) => {
    return 'success';
  });
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('login when tries to login', async () => {
    await userService.login('id', 'password');

    expect(login).toBeCalledTimes(1);
  });

  it('should not login when tries to login if already logged in', async () => {
    await userService.login('id', 'password');
    await userService.login('id', 'password');

    expect(login).toBeCalledTimes(1);
  });
});
