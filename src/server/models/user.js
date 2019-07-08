import Sequelize from 'sequelize';
import db from '../config/database-config';

const defaultUserImg =
  // eslint-disable-next-line max-len
  'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjp7uSztJ3jAhWBjKQKHSZwAqkQjRx6BAgBEAQ&url=https%3A%2F%2Fdeathbattlefanon.fandom.com%2Fwiki%2FChin-Chin&psig=AOvVaw3O0n5ETwjexM5gl5avRJsb&ust=1562403407133663';

const User = db.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    googleId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: defaultUserImg,
    },
  },
  {
    // eslint-disable-next-line max-len
    timestamps: false, // Колонки createdAt и updatedAt будут созданы автоматически
  },
);

export default User;
