/* eslint-disable consistent-return */
import axios from 'axios';

const sharePassword = async (userEmail, emails, passwordItems) => {
  try {
    const response = await axios.post('/api/users', {
      userEmail,
      emails,
      passwordItems,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default sharePassword;
