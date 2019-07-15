const csv = require('csv-parser');
const fs = require('fs');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');
const Password = require('../models/password.js');

function asyncParseCSV(path) {
  return new Promise((resolve, reject) => {
    try {
      const results = [];
      fs.createReadStream(path)
        .pipe(csv({ escape: "'" }))
        .on('data', data => results.push(data))
        .on('end', () => {
          resolve(results);
        });
    } catch (error) {
      reject(error);
    }
  });
}

function adaptData(userEmail, originalData) {
  return originalData.map(item => {
    return {
      name: item['﻿"Name"'],
      userEmail,
      resourceAddress: item.Address,
      login: item.Login,
      password: item.Password,
    };
  });
}

async function uploadFile(req, res) {
  const { userEmail } = req.body;
  const originalData = await asyncParseCSV(req.file.path);
  const parsedResults = await adaptData(userEmail, originalData);
  parsedResults.forEach(item => {
    if (!item.userEmail) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.EMPTY_USER_EMAIL });
      return;
    }

    if (!item.name) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.EMPTY_NAME });
      return;
    }

    if (!item.resourceAddress) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.EMPTY_RESOURCE_ADDRESS });
      return;
    }

    if (!item.login) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.EMPTY_LOGIN });
      return;
    }
    if (!item.password) {
      res
        .status(HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: MESSAGES.EMPTY_PASSWORD });
    }
  });

  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    const existingUserPasswords = await Password.getPasswordsByUserEmail(
      req.body.userEmail,
    );
    parsedResults.forEach(async item => {
      const duplicatePasswords = existingUserPasswords.find(
        existingPassword =>
          existingPassword.name === item.name &&
          existingPassword.resourceAddress === item.resourceAddress &&
          existingPassword.login === item.login,
      );

      const isPasswordAlreadyExists = !!duplicatePasswords;
      if (isPasswordAlreadyExists) return;
      await Password.createPassword({
        ...item,
        isAccepted: true,
        sendNotificationAt: date,
      });
    });
    res.status(HTTP_STATUS_CODES.CREATED).json({ message: MESSAGES.CREATED });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.NOT_FOUND)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  uploadFile,
};
