const { userSchema } = require('../models/user');
const { USER_CONST } = require('../../constants/index');

module.exports = {
  up: queryInterface =>
    queryInterface.createTable(USER_CONST.TABLE_NAME, userSchema),
  down: queryInterface => queryInterface.dropTable(USER_CONST.TABLE_NAME),
};
