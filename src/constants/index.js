const USER_CONST = {
  TABLE_NAME: 'Users',
  ID: 'id',
  GOOGLE_ID: 'googleId',
  EMAIL: 'email',
  NAME: 'name',
  IMG: 'img',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt',
};

const PASSWORD_CONST = {
  TABLE_NAME: 'Passwords',
  ID: 'id',
  USER_EMAIL: 'userEmail',
  NAME: 'name',
  RESOURCE_ADDRESS: 'resourceAddress',
  LOGIN: 'login',
  PASSWORD: 'password',
  IS_ACCEPTED: 'isAccepted',
  SEND_NOTIFICATION_AT: 'sendNotificationAt',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt',
};

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  USER_CONST,
  PASSWORD_CONST,
};
