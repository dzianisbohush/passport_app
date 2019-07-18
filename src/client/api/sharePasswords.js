import axios from 'axios';
import { PASSWORD_CONST } from '../../constants/index';

const createBodyForSharing = (userEmail, emails, passwordItems) => {
  const emailsToShare = [];

  const preparedPasswordItems = passwordItems.map(passwordItem => {
    const { login, name, resourceAddress, password } = passwordItem;

    return {
      [PASSWORD_CONST.LOGIN]: login,
      [PASSWORD_CONST.NAME]: name,
      [PASSWORD_CONST.RESOURCE_ADDRESS]: resourceAddress,
      [PASSWORD_CONST.PASSWORD]: password,
    };
  });

  emails.forEach(email => {
    emailsToShare.push({
      [PASSWORD_CONST.USER_EMAIL]: email,
      records: preparedPasswordItems,
    });
  });

  return {
    email: userEmail,
    emailsToShare,
  };
};

const sharePasswords = async (userEmail, emails, passwordItems) => {
  try {
    const body = createBodyForSharing(userEmail, emails, passwordItems);

    return await axios.post('/api/passwords/share', body);
  } catch (error) {
    throw new Error(error);
  }
};
export default sharePasswords;
