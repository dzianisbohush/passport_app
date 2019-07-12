module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1",
    database: process.env.DB_NAME || "postgres",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_TYPE || "postgres"
  }
};
