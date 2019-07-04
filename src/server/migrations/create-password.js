const { passwordModel } = require('../models/password');

module.exports = {
  up: queryInterface => queryInterface.createTable('Passwords', passwordModel),
  down: queryInterface => queryInterface.dropTable('Passwords'),
};
