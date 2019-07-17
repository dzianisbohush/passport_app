import axios from 'axios';

const createBodyForSharing = (userEmail, emails, passwordItems) => {
  const emailsToShare = [];

  const preparedPasswordItems = passwordItems.map(passwordItem => {
    const { login, name, resourceAddress, password } = passwordItem;

    return {
      login,
      name,
      resourceAddress,
      password,
    };
  });

  emails.forEach(email => {
    emailsToShare.push({
      userEmail: email,
      records: preparedPasswordItems,
    });
  });

  return {
    email: userEmail,
    emailsToShare,
  };
};

const sharePasswords = async (userEmail, emails, passwordItems) => {
  try {
    const body = createBodyForSharing(userEmail, emails, passwordItems);

    return await axios.post('/api/passwords/share', body);
  } catch (error) {
    throw new Error(error);
  }
};
export default sharePasswords;
