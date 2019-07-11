// We need to use require instead of import
// because this file is imported by sequelize-cli(without babel)
const Sequelize = require('sequelize');
const postgresConnection = require('../../../config/dbConfig');

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
  googleId: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  img: {
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
};

class User extends Model {}
User.init(userSchema, {
  sequelize,
  modelName: 'User',
});

function createUser(userData) {
  return User.create(userData);
}

function getUserByGoogleId(googleId) {
  return User.findOne({ where: { googleId } });
}

function getUserByUserEmail(email) {
  return User.findOne({ where: { email } });
}

function deleteUserByEmail(userEmail) {
  User.findOne(userEmail).then(record => record.destroy());
}

module.exports = {
  userSchema,
  User,
  createUser,
  deleteUserByEmail,
  getUserByUserEmail,
  getUserByGoogleId,
};
