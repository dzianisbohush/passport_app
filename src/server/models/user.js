// We need to use require instead of import
// because this file is imported by sequelize-cli(without babel)
const { USER_CONST } = require('../../constants');
// eslint-disable-next-line import/order
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
  [USER_CONST.ID]: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  [USER_CONST.GOOGLE_ID]: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  [USER_CONST.EMAIL]: {
    type: Sequelize.STRING,
  },
  [USER_CONST.NAME]: {
    type: Sequelize.STRING,
  },
  [USER_CONST.IMG]: {
    type: Sequelize.STRING,
  },
  [USER_CONST.CREATED_AT]: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  [USER_CONST.UPDATED_AT]: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

class User extends Model {}
User.init(userSchema, {
  sequelize,
  modelName: USER_CONST.TABLE_NAME,
});

function createUser(userData) {
  return User.create(userData);
}

function getUserByGoogleId(googleId) {
  return User.findOne({ where: { googleId } });
}

function getAllUsers() {
  return User.findAll();
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
  getAllUsers,
};
