import axios from 'axios';

const getPasswordsByUserId = async userId => {
  try {
    const response = await axios.get(`/api/passwords/${userId}`);

    return response;
  } catch (error) {
    throw console.error(error);
  }
};

export default getPasswordsByUserId;
