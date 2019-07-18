import axios from 'axios';
import { PASSWORD_CONST } from '../../constants/index';

const changePassword = async ({
  id,
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    return await axios.put(`/api/passwords/${id}`, {
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

export default changePassword;
