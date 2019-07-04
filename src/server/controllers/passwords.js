const Password = require('../models/password.js');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

async function getPasswordById(req, res) {
  if (!req.params.id) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
  }
  try {
    const userData = await Password.getPasswordById(req.params.id);
    res.status(HTTP_STATUS_CODES.OK).json(userData);
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function updatePasswordById(req, res) {
  if (!req.params.id) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
  }
  try {
    const existingData = await Password.getPasswordById(req.params.id);
    if (!existingData) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
    }
    const updatedData = await Password.updatePasswordById(
      req.params.id,
      req.body,
    );
    if (JSON.stringify(existingData) !== JSON.stringify(updatedData)) {
      res.status(HTTP_STATUS_CODES.OK).json(updatedData);
    }
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function deletePasswordById(req, res) {
  if (!req.params.id) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_ID });
  }
  try {
    const existingData = await Password.getPasswordById(req.params.id);
    if (!existingData) {
      res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: MESSAGES.NOT_FOUND });
    }
    await Password.deletePasswordById(req.params.id);
    const remoteRecord = await Password.getPasswordById(req.params.id);
    if (remoteRecord) {
      res
        .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .status({ error: MESSAGES.INTERNAL_SERVER_ERROR });
    }
    res.status(HTTP_STATUS_CODES.OK).json({ success: MESSAGES.OK });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function createPassword(req, res) {
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
    const userData = await Password.createPassword({
      ...req.body,
      sendNotificationAt: date,
    });
    res.status(HTTP_STATUS_CODES.OK).json(userData);
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  createPassword,
  getPasswordById,
  deletePasswordById,
  updatePasswordById,
};
