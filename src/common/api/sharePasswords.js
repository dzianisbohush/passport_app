/* eslint-disable consistent-return */
import axios from 'axios';

const createBodyForSharing = (userEmail, emails, passwordItems) => {
  const records = [];

  passwordItems.forEach(password => {
    emails.forEach(email => {
      records.push({
        ...password,
        userEmail: email,
      });
    });
  });

  return {
    email: userEmail,
    emailsToShare: emails,
    records,
  };
};

const sharePasswords = async (userEmail, emails, passwordItems) => {
  try {
    const body = createBodyForSharing(userEmail, emails, passwordItems);

    const response = await axios.post('/api/passwords/share', body);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default sharePasswords;
