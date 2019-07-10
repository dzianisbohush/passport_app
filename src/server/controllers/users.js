const User = require('../models/user.js');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

async function createUser(req, res) {
  const defaultUserIcon =
    'http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png';
  const userData = req.body;
  if (!userData.email) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_USER_EMAIL });
    return;
  }

  if (!userData.googleId) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_GOOGLE_ID });
    return;
  }

  if (!userData.name) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_NAME });
    return;
  }

  try {
    const existingUser = await User.getUserByUserEmail(userData.email);
    if (existingUser) {
      res
        .status(HTTP_STATUS_CODES.CONFLICT)
        .json({ message: MESSAGES.DUPLICATE_USER });
      return;
    }

    if (!userData.img) {
      userData.img = defaultUserIcon;
    }
    await User.createUser({
      ...userData,
    });
    res.status(HTTP_STATUS_CODES.CREATED).json({ message: MESSAGES.CREATED });
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function deleteUserByEmail(req, res) {
  const { userEmail } = req.params;
  if (!userEmail) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_USER_EMAIL });
    return;
  }

  try {
    const existingData = await User.getUserByUserEmail(userEmail);

    if (!existingData) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
      return;
    }

    await User.deleteUserByEmail(userEmail);
    res.status(HTTP_STATUS_CODES.OK).json({ message: MESSAGES.OK });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  createUser,
  deleteUserByEmail,
};
