const { passwordSchema } = require('../models/password');
// eslint-disable-next-line prefer-destructuring
const PASSWORD_CONST = require('../../constants/index').PASSWORD_CONST;

module.exports = {
  up: queryInterface =>
    queryInterface.createTable(PASSWORD_CONST.TABLE_NAME, passwordSchema),
  down: queryInterface => queryInterface.dropTable(PASSWORD_CONST.TABLE_NAME),
};
