const Password = require('../models/password.js');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

function isCorrect(password) {
  if (!password.userEmail) {
    return false;
  }

  if (!password.name) {
    return false;
  }

  if (!password.resourceAddress) {
    return false;
  }

  if (!password.login) {
    return false;
  }
  if (!password.password) {
    return false;
  }
  return true;
}

async function acceptSharingPasswords(req, res) {
  if (!req.params.userEmail) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_USER_EMAIL });
    return;
  }
  try {
    const userPasswords = await Password.getPasswordsByUserEmail(
      req.params.userEmail,
    );
    if (!userPasswords) {
      res
        .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ error: MESSAGES.NOT_FOUND });
    }
    userPasswords.forEach(async record => {
      await Password.updatePasswordById(record.id, {
        ...record,
        isAccepted: true,
      });
    });
    res.status(HTTP_STATUS_CODES.OK).json({ message: MESSAGES.OK });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function rejectSharingPasswords(req, res) {
  const { userEmail } = req.params;

  if (!userEmail) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_USER_EMAIL });
  }

  try {
    const userPasswords = await Password.getPasswordsByUserEmail(userEmail);
    if (!userPasswords) {
      res
        .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ error: MESSAGES.NOT_FOUND });
    }
    userPasswords.forEach(async record => {
      await Password.deletePasswordById(record.id);
    });
    res.status(HTTP_STATUS_CODES.OK).json({ message: MESSAGES.OK });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function sharePasswords(req, res) {
  const { sharingData } = req.body;

  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const isSharingDataCorrect = sharingData.every(isCorrect);
    if (isSharingDataCorrect) {
      sharingData.forEach(async record => {
        await Password.createPassword({
          ...record,
          isAccepted: false,
          sendNotificationAt: date,
        });
      });
      res.status(HTTP_STATUS_CODES.OK).json({ message: MESSAGES.OK });
    }
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

async function getPasswordsByUserId(req, res) {
  const { userEmail } = req.params;

  if (!userEmail) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_EMAIL });
    return;
  }

  try {
    const userData = await Password.getPasswordsByUserEmail(userEmail);
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

    const updatedData = await Password.updatePasswordById(id, {
      ...req.body,
      isAccepted: true,
    });

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
  if (!req.body.userEmail) {
    res
      .status(HTTP_STATUS_CODES.BAD_REQUEST)
      .json({ error: MESSAGES.EMPTY_USER_EMAIL });
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
    const existingUserPasswords = await Password.getPasswordsByUserEmail(
      req.body.userEmail,
    );

    const duplicatePasswords = existingUserPasswords.find(
      existingPassword =>
        existingPassword.resourceAddress === req.body.resourceAddress &&
        existingPassword.login === req.body.login &&
        existingPassword.password === req.body.password,
    );

    const isPasswordAlreadyExists = !!duplicatePasswords;
    if (isPasswordAlreadyExists) {
      res
        .status(HTTP_STATUS_CODES.CONFLICT)
        .json({ message: MESSAGES.DUPLICATE_PASSWORD });
      return;
    }
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    await Password.createPassword({
      ...req.body,
      isAccepted: true,
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
  acceptSharingPasswords,
  getPasswordsByUserId,
  deletePasswordById,
  updatePasswordById,
  sharePasswords,
  rejectSharingPasswords,
};
