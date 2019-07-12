module.exports = {
  development: {
    username: process.env.DB_USER || "username",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "dbName",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_TYPE || "postgres"
  }
};
