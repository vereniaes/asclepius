class ClientError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 400;
    this.name = "ClientError";
  }
}

module.exports = ClientError;
