const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGES = {
  CREATED: 'Created',
  DUPLICATE_PASSWORD: 'Password must be different from the previous one',
  EMPTY_ID: 'Id is required',
  EMPTY_NAME: 'Name is required',
  EMPTY_USER_EMAIL: 'userEmail is required',
  EMPTY_EMAIL: 'Email is required',
  EMPTY_RESOURCE_ADDRESS: 'Resource address is required',
  EMPTY_LOGIN: 'Login is required',
  EMPTY_PASSWORD: 'Password is required',
  TOKEN_ERROR: 'Wrong token',
  NOT_FOUND: 'Not found',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  OK: 'Ok',
};

const ONE_DAY_PERIOD = 24 * 60 * 60 * 1000;

// Google API
const GOOGLE_API_USER_INFO_PROFILE =
  'https://www.googleapis.com/auth/userinfo.profile';
const GOOGLE_API_USER_INFO_EMAIL =
  'https://www.googleapis.com/auth/userinfo.email';
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const COOKIE_SESSION_KEY = 'somedummysecretkey';

module.exports = {
  HTTP_STATUS_CODES,
  MESSAGES,
  ONE_DAY_PERIOD,
  GOOGLE_API_USER_INFO_PROFILE,
  GOOGLE_API_USER_INFO_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  COOKIE_SESSION_KEY,
};
