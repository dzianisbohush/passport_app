import axios from 'axios';

const deletePassword = async id => {
  try {
    return await axios.delete(`/api/passwords/${id}`, {
      id,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default deletePassword;
