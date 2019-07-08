const { user } = require('../models/user');

module.exports = {
  up: queryInterface => queryInterface.createTable('User', user),
  down: queryInterface => queryInterface.dropTable('User'),
};
