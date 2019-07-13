/* eslint-disable consistent-return */
import axios from 'axios';

const sharePasswords = async (userEmail, emails, passwordItems) => {
  try {
    const response = await axios.post('/api/passwords/share', {
      userEmail,
      emails,
      passwordItems,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default sharePasswords;
