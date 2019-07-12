// We need to use require instead of import
// because this file is imported by sequelize-cli(without babel)
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
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
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  userEmail: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  resourceAddress: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  login: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  isAccepted: {
    type: Sequelize.BOOLEAN,
  },
  sendNotificationAt: {
    allowNull: false,
    type: Sequelize.DATE,
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

class Password extends Model {}
Password.init(passwordSchema, {
  sequelize,
  modelName: 'Password',
});

function createPassword(userData) {
  return Password.create(userData);
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
  return Password.findAll({ where: { createdAt: { [Op.lt]: d } } });
}

module.exports = {
  passwordSchema,
  Password,
  createPassword,
  getPasswordById,
  getPasswordsByUserEmail,
  deletePasswordById,
  updatePasswordById,
  getAllUserForEmailing,
};
