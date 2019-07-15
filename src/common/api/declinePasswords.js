/* eslint-disable consistent-return */

import axios from 'axios';

const declinePasswords = async userEmail => {
  try {
    const response = await axios.delete(
      `/api/api/passwords/share/accept/:${userEmail}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default declinePasswords;
