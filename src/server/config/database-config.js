import Sequelize from 'sequelize';

export default new Sequelize('passport', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres',
});
