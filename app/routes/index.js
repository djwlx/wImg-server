// 路由
const Router = require("koa-router");
const User = require("../controller/user");
const File = require("../controller/file");

const router = new Router({
  prefix: "/api",
});

router
  .get("/", User.test)
  .post("/login", User.login)
  .get("/register", User.register)
  .get("/show", User.show)
  .post("/add", User.create)
  .post("/upload", File.save);

module.exports = router;
