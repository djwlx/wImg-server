const user = require("../models/user");
let index = 0;
class User {
  static query = () => {
    return user.findAll();
  };

  static queryByEmail = (email) => {
    return user.queryOne({ email });
  };
  static add = () => {
    return user.create({
      firstName: `王${index++}`,
      lastName: `小明`,
    });
  };
}

module.exports = User;
