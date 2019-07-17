import axios from 'axios';

const getPasswordsByUserEmail = async userId => {
  try {
    return await axios.get(`/api/passwords/${userId}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default getPasswordsByUserEmail;
