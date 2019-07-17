import axios from 'axios';

const addPassword = async ({
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    return await axios.post('/api/passwords', {
      userEmail,
      name,
      resourceAddress,
      login,
      password,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default addPassword;
