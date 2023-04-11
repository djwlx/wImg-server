const jwt = require("jsonwebtoken");

const key = "DJWL";

// 这里默认设置为无限期
class JWT {
  static setToken = (data) => {
    return jwt.sign(data, key);
  };
  static getData = (token) => {
    return jwt.verify(token, key);
  };
}

module.exports = JWT;
