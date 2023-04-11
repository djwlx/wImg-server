const sequelize = require("../utils/sequelize");
const { DataTypes } = require("sequelize");
const user = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  sex: DataTypes.STRING,
});

user.sync({ alter: true }).then((res) => {
  console.log(res, "同步表结构成功");
});
module.exports = user;
