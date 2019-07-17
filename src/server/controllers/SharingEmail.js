import HBS from 'handlebars';
import fs from 'fs';
import path from 'path';
import Sendgrid from 'sendgrid-web';

const sendgrid = new Sendgrid({
  user: process.env.RAZZLE_SANDGRID_NAME,
  key: process.env.RAZZLE_SANDGRID_PASS,
});
const site = process.env.RAZZLE_SANDGRID_URL;
const siteEmail = process.env.RAZZLE_SANDGRID_EMAIL;
// eslint-disable-next-line max-len
const template = fs.readFileSync(
  path.join(__dirname, '../', 'src', 'server', 'templates', 'shareEmail.hbs'),
  'utf-8',
);
const compiledtemplate = HBS.compile(template);

// eslint-disable-next-line import/prefer-default-export
export const SharingEmailsController = (acountOwner, userEmail) => {
  const data = {
    site,
    acountOwner,
    userEmail,
  };
  sendgrid.send(
    {
      to: userEmail,
      from: siteEmail,
      subject: 'please refresh acsept sharing',
      html: compiledtemplate({ data }),
    },
    () => {},
    null,
    true,
    'America/Los_Angeles',
  );
};
