import axios from 'axios';

const getUserInfoByUserEmail = async userEmail => {
  try {
    return await axios.get(`/api/users/${userEmail}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default getUserInfoByUserEmail;
