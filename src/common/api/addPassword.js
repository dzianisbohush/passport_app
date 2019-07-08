import axios from 'axios';

const addPassword = async ({
  userId,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    const response = await axios.post('/api/passwords', {
      userId,
      name,
      resourceAddress,
      login,
      password,
    });

    return response;
  } catch (error) {
    throw error(error);
  }
};

export default addPassword;
