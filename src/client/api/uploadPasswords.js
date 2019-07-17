import axios from 'axios';

const uploadPasswords = async formData => {
  try {
    return await axios({
      method: 'post',
      url: '/api/files/upload',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
  } catch (error) {
    throw new Error(error);
  }
};
export default uploadPasswords;
