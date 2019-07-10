/* eslint-disable consistent-return */

import axios from 'axios';

const deletePassword = async id => {
  try {
    const response = await axios.delete(`/api/passwords/${id}`, {
      id,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default deletePassword;
