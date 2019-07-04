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

const passwordModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  resourceAddress: {
    type: Sequelize.STRING,
  },
  login: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  isPrivate: {
    type: Sequelize.BOOLEAN,
  },
  sendNotificationAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

class Password extends Model {}
Password.init(passwordModel, {
  sequelize,
  modelName: 'Password',
});

async function createPassword(userData) {
  try {
    return await Password.create(userData);
  } catch (error) {
    return error;
  }
}

async function getPasswordById(id) {
  try {
    return await Password.findOne(id);
  } catch (error) {
    return error;
  }
}

async function updatePasswordById(id, newData) {
  try {
    return await Password.update(id, newData);
  } catch (error) {
    return error;
  }
}

async function deletePasswordById(id) {
  try {
    return await Password.destroy(id);
  } catch (error) {
    return error;
  }
}

module.exports = {
  passwordModel,
  createPassword,
  getPasswordById,
  deletePasswordById,
  updatePasswordById,
};
