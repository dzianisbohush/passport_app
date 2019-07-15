/* eslint-disable consistent-return */

import axios from 'axios';

const acceptPassword = async userEmail => {
  try {
    const response = await axios.patch(
      `/api/api/passwords/share/accept/:${userEmail}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default acceptPassword;
