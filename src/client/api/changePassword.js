import axios from 'axios';

const changePassword = async ({
  id,
  userEmail,
  name,
  resourceAddress,
  login,
  password,
}) => {
  try {
    return await axios.put(`/api/passwords/${id}`, {
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

export default changePassword;
