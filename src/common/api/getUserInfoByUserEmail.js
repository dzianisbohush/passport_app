/* eslint-disable consistent-return */
import axios from 'axios';

const getUserInfoByUserEmail = async userEmail => {
  try {
    const response = await axios.get(`/api/users/${userEmail}`);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getUserInfoByUserEmail;
