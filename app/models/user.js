const sequelize = require("../utils/sequelize");
const { DataTypes } = require("sequelize");
const user = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passWord: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  icon: {
    type: DataTypes.STRING,
  },
});

user.sync({ alter: true }).then((res) => {
  console.log(res, "同步表结构成功");
});
module.exports = user;
