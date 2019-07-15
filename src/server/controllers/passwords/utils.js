const { MESSAGES } = require('../../constants');

export function validatePassword(password) {
  if (!password.name) {
    throw new Error(MESSAGES.EMPTY_NAME);
  }

  if (!password.resourceAddress) {
    throw new Error(MESSAGES.EMPTY_RESOURCE_ADDRESS);
  }

  if (!password.login) {
    throw new Error(MESSAGES.EMPTY_LOGIN);
  }

  if (!password.password) {
    throw new Error(MESSAGES.EMPTY_NAME);
  }
}

export function validatePasswords(passwords) {
  passwords.forEach(validatePassword);
}
