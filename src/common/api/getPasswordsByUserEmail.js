/* eslint-disable consistent-return */
import axios from 'axios';

const getPasswordsByUserEmail = async userId => {
  try {
    const response = await axios.get(`/api/passwords/${userId}`);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getPasswordsByUserEmail;
