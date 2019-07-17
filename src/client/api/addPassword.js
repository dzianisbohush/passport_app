/* eslint-disable consistent-return */

import axios from 'axios';

const addPassword = async ({
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    const response = await axios.post('/api/passwords', {
      userEmail,
      name,
      resourceAddress,
      login,
      password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default addPassword;
