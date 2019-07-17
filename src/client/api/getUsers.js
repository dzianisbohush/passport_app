import axios from 'axios';

const getUsers = async () => {
  try {
    return await axios.get(`/api/users`);
  } catch (error) {
    throw new Error(error);
  }
};

export default getUsers;
