var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(__dirname + "../app/database/index.db");
db.all("SELECT * FROM `User`", null, (err, rows) => {
  console.log(err, rows);
});
