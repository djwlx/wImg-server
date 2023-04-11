// 路由
const Router = require("koa-router");
const User = require("../controller/user");

const router = new Router({
  prefix: "/api",
});

router
  .get("/", User.test)
  .get("/login", User.test)
  .get("/register", User.test)
  .get("/show", User.show)
  .post("/add", User.create);

module.exports = router;
