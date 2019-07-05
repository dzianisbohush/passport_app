const Password = require('../models/password.js');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

async function getPasswordsByUserId(req, res) {
  const { userId } = req.params;

  if (!userId) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
    return;
  }

  try {
    const userData = await Password.getPasswordsByUserId(userId);
    if (!userData || userData.length < 1) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
      return;
    }
    res.status(HTTP_STATUS_CODES.OK).json(userData);
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function updatePasswordById(req, res) {
  const { id } = req.params;
  if (!id) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
    return;
  }

  try {
    const existingData = await Password.getPasswordById(id);

    if (!existingData) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
      return;
    }

    if (existingData.password === req.body.password) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.DUPLICATE_PASSWORD });
      return;
    }

    const updatedData = await Password.updatePasswordById(id, req.body);

    res.status(HTTP_STATUS_CODES.OK).json(updatedData);
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function deletePasswordById(req, res) {
  const { id } = req.params;
  if (!id) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
    return;
  }

  try {
    const existingData = await Password.getPasswordById(id);

    if (!existingData) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
      return;
    }

    await Password.deletePasswordById(id);
    res.status(HTTP_STATUS_CODES.OK).json({ message: MESSAGES.OK });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function createPassword(req, res) {
  if (!req.body.userId) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
    return;
  }

  if (!req.body.name) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_NAME });
    return;
  }

  if (!req.body.resourceAddress) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_RESOURCE_ADDRESS });
    return;
  }

  if (!req.body.login) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_LOGIN });
    return;
  }
  if (!req.body.password) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_PASSWORD });
    return;
  }

  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    await Password.createPassword({
      ...req.body,
      sendNotificationAt: date,
    });
    res.status(HTTP_STATUS_CODES.CREATED).json({ message: MESSAGES.CREATED });
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  createPassword,
  getPasswordsByUserId,
  deletePasswordById,
  updatePasswordById,
};
