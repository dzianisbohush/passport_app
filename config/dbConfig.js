module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1111",
    database: process.env.DB_NAME || "passport",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_TYPE || "postgres"
  }
};
