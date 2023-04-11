const userOp = require("../service/user");
const jwt = require("../utils/jwt");

class User {
  static test = async (ctx, next) => {
    ctx.body = "test";
  };

  static login = async (ctx, next) => {
    const result = jwt.setToken({ id: "测试id" });
    ctx.body = {
      status: 200,
      token: result,
    };
  };

  static show = async (ctx, next) => {
    const result = await userOp.query();
    ctx.body = result;
  };

  static create = async (ctx, next) => {
    const result = await userOp.add();
    ctx.body = result;
  };
}
module.exports = User;
