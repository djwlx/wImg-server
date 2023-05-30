const { log } = require("../utils/logger");

// 日志记录中间件,可以自由选择记录哪些东西
const logMrak = (options) => {
  return async (ctx, next) => {
    const startTime = Date.now();
    const {
      method, // 请求方法
      url, // 请求链接
      body, //请求数据
      query, //路径参数
    } = ctx?.request;

    const stringQuery = JSON.stringify(query);
    // 记录应用中的错误
    try {
      await next();
    } catch (err) {
      log.error(err);
    }

    const endTime = Date.now();
    const { status } = ctx.response;
    const time = endTime - startTime + "ms";
    log.info(
      method,
      status,
      url,
      "body:",
      body,
      "query:",
      stringQuery,
      "请求耗时:",
      time
    );
  };
};
module.exports = logMrak;
