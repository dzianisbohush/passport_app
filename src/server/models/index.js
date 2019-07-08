import User from './user';
import Password from './password';
// import sequelize from '../config/database-config';

const DB = {};

User.hasMany(Password);
Password.belongsTo(User, { foreignKey: 'UserId' });
DB.User = User;
DB.Password = Password;

// eslint-disable-next-line max-len
//  if you need to drop tours tables and reset then run this code ones(coment in => run => coment out)
// sequelize
// .sync({force:true})
// .then(s => console.log('Синхронизировано'))
// .catch((err) => console.log(err));

export default DB;
