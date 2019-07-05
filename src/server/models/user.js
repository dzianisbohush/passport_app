// We need to use require instead of import
// because this file is imported by sequelize-cli(without babel)
const Sequelize = require('sequelize');
const postgresConnection = require('../../../config/postgresConnection');

const { Model } = Sequelize;

const {
  development: { username, password, database, host, dialect },
} = postgresConnection;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  // test variant of user`s db model
};

class User extends Model {}
User.init(userSchema, {
  sequelize,
  modelName: 'User',
});

function createUser(userData) {
  return User.create(userData);
}

module.exports = {
  userSchema,
  User,
  createUser,
};
