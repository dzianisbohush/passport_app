import axios from 'axios';

const acceptPasswords = async userEmail => {
  try {
    return await axios.patch(`/api/passwords/share/accept/${userEmail}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default acceptPasswords;
