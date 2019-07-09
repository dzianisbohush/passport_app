import axios from 'axios';

const getPasswordsByUserId = async userId => {
  try {
    const response = await axios.get(`/api/passwords/${userId}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getPasswordsByUserId;
