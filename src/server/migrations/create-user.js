const { userSchema } = require('../models/user');
// eslint-disable-next-line prefer-destructuring
const USER_CONST = require('../../constants/index').USER_CONST;

module.exports = {
  up: queryInterface =>
    queryInterface.createTable(USER_CONST.TABLE_NAME, userSchema),
  down: queryInterface => queryInterface.dropTable(USER_CONST.TABLE_NAME),
};
