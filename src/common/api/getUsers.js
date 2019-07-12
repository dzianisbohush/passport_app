/* eslint-disable consistent-return */
import axios from 'axios';

const getUsers = async () => {
  try {
    const response = await axios.get(`/api/users`);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getUsers;
