import axios from 'axios';
import { PASSWORD_CONST } from '../../constants';

const addPassword = async ({
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    return await axios.post('/api/passwords', {
      [PASSWORD_CONST.USER_EMAIL]: userEmail,
      [PASSWORD_CONST.NAME]: name,
      [PASSWORD_CONST.RESOURCE_ADDRESS]: resourceAddress,
      [PASSWORD_CONST.LOGIN]: login,
      [PASSWORD_CONST.PASSWORD]: password,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default addPassword;
