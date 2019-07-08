const { passwordSchema } = require('../models/password');

module.exports = {
  up: queryInterface => queryInterface.createTable('Passwords', passwordSchema),
  down: queryInterface => queryInterface.dropTable('Passwords'),
};
