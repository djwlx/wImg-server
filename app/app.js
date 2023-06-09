const Koa = require("koa");
const router = require("./routes");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
const logMark = require("./middleware/log");
const authenticate = require("./middleware/authenticate");
const staticServe = require("koa-static");
const config = require("../config");

const app = new Koa();
// 跨域
app.use(cors());

// 解析requestBody
app.use(
  koaBody({
    multipart: true, // 启用文件上传支持
  })
);
// 记录日志
app.use(logMark());
// 鉴权,配置不经过校验的接口
app.use(
  authenticate({
    notInclude: ["/api/login", "/api/register"],
  })
);
// 路由
app.use(router.routes(), router.allowedMethods());
// 静态文件
app.use(staticServe(__dirname + "/static"));

app.listen(config.port, () => {
  console.log("应用启动在端口：", config.port);
});
