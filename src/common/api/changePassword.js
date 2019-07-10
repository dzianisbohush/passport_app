/* eslint-disable consistent-return */

import axios from 'axios';

const changePassword = async ({
  id,
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    const response = await axios.put(`/api/passwords/${id}`, {
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

export default changePassword;
