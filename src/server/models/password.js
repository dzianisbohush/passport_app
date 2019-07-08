import Sequelize from 'sequelize';
import db from '../config/database-config';

const Password = db.define(
  'Password',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    src: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

export default Password;
