const JWT = require("../utils/jwt");
const config = require("../../config/index");
// 鉴权通过之后，将用户信息保存在state中方便后续操作
// 没有权限返回401
const authenticate = (option) => {
  return async (ctx, next) => {
    // 自定义token放在header中，所以从header中去取，也可以放在其他地方
    const { header, url } = ctx.request;

    // 控制哪些路由不进行权限校验
    if (option.notInclude.includes(url)) {
      await next();
      return;
    }
    if (!url.includes(option.need)) {
      await next();
      return;
    }

    // 权限校验
    const xtoken = header[config.tokenHeader];
    if (!xtoken) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: "未进行权限认证",
      };
      return;
    } else {
      // 认证成功后可以从数据库中取出用户信息放到ctx的state中,只捕获认证错误
      let userID;
      try {
        const data = JWT.getData(xtoken);
        const { id } = data;
        userID = id;
      } catch (e) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          msg: "权限认证错误",
        };
      }
      if (userID) {
        ctx.state.user = {
          id: userID,
        };
      }
      await next();
    }
  };
};
module.exports = authenticate;
