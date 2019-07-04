const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const MESSAGES = {
  EMPTY_ID: 'Id is required',
  EMPTY_NAME: 'Name is required',
  EMPTY_RESOURCE_ADDRESS: 'Resource address is required',
  EMPTY_LOGIN: 'Login is required',
  EMPTY_PASSWORD: 'Password is required',
  TOKEN_ERROR: 'Wrong token',
  NOT_FOUND: 'Not found',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  OK: 'Ok',
};

module.exports = { HTTP_STATUS_CODES, MESSAGES };
