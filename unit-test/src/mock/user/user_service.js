class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogined = false;
  }

  login(id, password) {
    if (!this.isLogined) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogined = true));
    }
  }
}

module.exports = UserService;
