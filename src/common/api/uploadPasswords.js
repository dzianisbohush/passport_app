/* eslint-disable consistent-return */

import axios from 'axios';

const uploadPasswords = async formData => {
  try {
    const response = await axios({
      method: 'post',
      url: '/api/files/upload',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });

    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export default uploadPasswords;
