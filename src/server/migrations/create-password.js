const { passwordSchema } = require('../models/password');
const { PASSWORD_CONST } = require('../../constants/index');

module.exports = {
  up: queryInterface =>
    queryInterface.createTable(PASSWORD_CONST.TABLE_NAME, passwordSchema),
  down: queryInterface => queryInterface.dropTable(PASSWORD_CONST.TABLE_NAME),
};
