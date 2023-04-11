const { Sequelize } = require("sequelize");
const { baseLog, log } = require("./logger");
const path = require("path");

const dbPath = path.resolve(__dirname, "../database/index.db");
// 创建是同步的，执行数据库操作是异步的
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: (sql) => baseLog.info(sql),
  define: {
    freezeTableName: true,
    timestamps: true,
  },
});

try {
  sequelize.authenticate().then(() => {
    log.info("连接数据库成功");
  });
} catch (error) {
  log.error("连接数据库错误", error);
}

module.exports = sequelize;
