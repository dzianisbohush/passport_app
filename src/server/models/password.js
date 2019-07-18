// We need to use require instead of import
// because this file is imported by sequelize-cli(without babel)
// eslint-disable-next-line prefer-destructuring
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
// eslint-disable-next-line prefer-destructuring
const PASSWORD_CONST = require('../../constants').PASSWORD_CONST;
const postgresConnection = require('../../../config/dbConfig');

const { Model } = Sequelize;

const {
  development: { username, password, database, host, dialect },
} = postgresConnection;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const passwordSchema = {
  [PASSWORD_CONST.ID]: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  [PASSWORD_CONST.USER_EMAIL]: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  [PASSWORD_CONST.NAME]: {
    type: Sequelize.STRING,
  },
  [PASSWORD_CONST.RESOURCE_ADDRESS]: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  [PASSWORD_CONST.LOGIN]: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  [PASSWORD_CONST.PASSWORD]: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  [PASSWORD_CONST.IS_ACCEPTED]: {
    type: Sequelize.BOOLEAN,
  },
  [PASSWORD_CONST.SEND_NOTIFICATION_AT]: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  [PASSWORD_CONST.CREATED_AT]: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  [PASSWORD_CONST.UPDATED_AT]: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

class Password extends Model {}
Password.init(passwordSchema, {
  sequelize,
  modelName: PASSWORD_CONST.TABLE_NAME,
});

function createPassword(userData) {
  return Password.create(userData);
}

function getPasswordsForExtByUserEmail(userEmail) {
  return Password.findAll({
    where: { userEmail },
    attributes: [
      PASSWORD_CONST.RESOURCE_ADDRESS,
      PASSWORD_CONST.LOGIN,
      PASSWORD_CONST.PASSWORD,
    ],
  });
}

async function createPasswordIfNotExist(userData) {
  const isPasswordExist = await Password.findAll({
    where: {
      userEmail: userData.userEmail,
      name: userData.name,
      resourceAddress: userData.resourceAddress,
      login: userData.login,
    },
  });

  if (!isPasswordExist.length) {
    return Password.create(userData);
  }
  return null;
}

function getPasswordsByUserEmail(userEmail) {
  return Password.findAll({ where: { userEmail } });
}

function getPasswordById(id) {
  return Password.findByPk(id);
}

async function updatePasswordById(id, newData) {
  await Password.update(newData, { where: { id } });
  return Password.findByPk(id);
}

function deletePasswordById(id) {
  Password.findByPk(id).then(record => record.destroy());
}
function getAllUserForEmailing() {
  const d = new Date();
  return Password.findAll({
    where: { [PASSWORD_CONST.SEND_NOTIFICATION_AT]: { [Op.gte]: d } },
  });
}

module.exports = {
  passwordSchema,
  Password,
  createPassword,
  createPasswordIfNotExist,
  getPasswordById,
  getPasswordsByUserEmail,
  deletePasswordById,
  updatePasswordById,
  getAllUserForEmailing,
  getPasswordsForExtByUserEmail,
};
