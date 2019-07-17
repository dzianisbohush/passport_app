/* eslint-disable consistent-return */

import axios from 'axios';

const acceptPasswords = async userEmail => {
  try {
    const response = await axios.patch(
      `/api/passwords/share/accept/${userEmail}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default acceptPasswords;
