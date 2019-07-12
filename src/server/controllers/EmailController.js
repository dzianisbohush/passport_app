import HBS from 'handlebars';
import fs from 'fs';
import path from 'path';
import Sendgrid from 'sendgrid-web';
import { SANDGRID } from '../constants';

import Password from '../models/password';

const sendgrid = new Sendgrid({ user: SANDGRID.NAME, key: SANDGRID.PASS });
// eslint-disable-next-line max-len
const template = fs.readFileSync(
  path.join(__dirname, '../', 'src', 'server', 'templates', 'Email.hbs'),
  'utf-8',
);
const compiledtemplate = HBS.compile(template);

const EmailController = () => {
  Password.getAllUserForEmailing().then(data => {
    const arr = Array.from(data);
    arr.forEach(el => {
      // eslint-disable-next-line no-shadow
      const data = {
        we: SANDGRID.URL,
        site: el.dataValues.resourceAddress,
      };
      sendgrid.send(
        {
          to: el.dataValues.userEmail,
          from: SANDGRID.EMAIL,
          subject: 'please refresh pasword',
          html: compiledtemplate({ data }),
        },
        function(err) {
          if (err) {
            console.log(err);
            // eslint-disable-next-line no-undef
            res.json({ Error: 'Error in sending mail' });
          } else {
            console.log('Success.');
            // eslint-disable-next-line no-undef
            res.json({ Success: 'sucessful' });
          }
        },
        null,
        true,
        'America/Los_Angeles',
      );
    });
  });
};

export default EmailController;
