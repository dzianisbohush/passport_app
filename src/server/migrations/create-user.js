const { userSchema } = require('../models/user');

module.exports = {
  up: queryInterface => queryInterface.createTable('Users', userSchema),
  down: queryInterface => queryInterface.dropTable('Users'),
};
