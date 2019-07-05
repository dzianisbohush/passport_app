const User = require('../models/user.js');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

async function createUser(req, res) {
  if (!req.body.name) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_NAME });
    return;
  }

  try {
    await User.createUser({
      ...req.body,
    });
    res.status(HTTP_STATUS_CODES.CREATED).json({ message: MESSAGES.CREATED });
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  createUser,
};
