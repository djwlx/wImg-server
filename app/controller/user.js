const userOp = require("../service/user");
const jwt = require("../utils/jwt");
const Response = require("../utils/response");

class User {
  // 注册
  static register = async (ctx, next) => {
    const { email, password } = ctx.body;
    const hasUser = userOp.queryByEmail(email);
    if (hasUser) {
      ctx.body = Response.error(400, "用户已注册");
      return;
    }
    ctx.body = Response.success();
  };

  // 登录
  static login = async (ctx, next) => {
    const result = jwt.setToken({ id: "测试id" });
    ctx.body = {
      code: 0,
      data: { token: result },
      message: "账号或密码错误",
    };
  };

  static test = async (ctx, next) => {
    ctx.body = "test";
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
