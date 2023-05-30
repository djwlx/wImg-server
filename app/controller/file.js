const fs = require("fs");
const path = require("path");
class File {
  static save = async (ctx, next) => {
    const { file } = ctx.request.files;
    const reader = fs.createReadStream(file.filepath);
    const filePath = path.join(__dirname, "../static", file.originalFilename);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    ctx.body = {
      code: 0,
      data: null,
      message: "上传成功",
    };
  };
}

module.exports = File;
