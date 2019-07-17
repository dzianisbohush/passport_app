import axios from 'axios';

const declinePasswords = async userEmail => {
  try {
    return await axios.delete(`/api/passwords/share/accept/${userEmail}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default declinePasswords;
