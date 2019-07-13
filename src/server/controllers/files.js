const csv = require('csv-parser');
const fs = require('fs');
const { HTTP_STATUS_CODES, MESSAGES } = require('../constants');

async function uploadFile(req, res) {
  try {
    const { userEmail, needRewrite } = req.body;
    const results = [];

    console.log('This is userEmail', userEmail);
    console.log('This is needRewrite', needRewrite); // do not think about this

    fs.createReadStream(req.file.path)
      .pipe(csv({ escape: "'" }))
      .on('data', data => results.push(data))
      .on('end', () => {
        const parsedResults = results.map(item => {
          return {
            name: item['﻿"Name"'],
            resourceAddress: item.Address,
            login: item.Login,
            password: item.Password,
          };
        });

        // @todo save this to db
        console.log(parsedResults);
      });
  } catch (e) {
    res
      .status(HTTP_STATUS_CODES.NOT_FOUND)
      .json({ error: MESSAGES.INTERNAL_SERVER_ERROR });
  }
}

module.exports = {
  uploadFile,
};
