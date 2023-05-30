class Response {
  static success = (data, message) => {
    return {
      code: 0,
      data,
      message: message ?? "",
    };
  };
  static error = (code, message) => {
    return {
      code: code ?? 400,
      data: null,
      message,
    };
  };
}

module.exports = Response;
