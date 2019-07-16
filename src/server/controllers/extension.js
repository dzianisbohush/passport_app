import { getPasswordsForExtByUserEmail } from '../models/password';

// eslint-disable-next-line import/prefer-default-export
function getPassportData(req, res) {
  getPasswordsForExtByUserEmail(req.body.email)
    .then(data => {
      res.status(200).json({
        isError: false,
        msg: null,
        data: Array.from(data),
      });
    })
    .catch(err => {
      console.log(err);
      res.status(403).json({ isError: true, msg: 'error', data: null });
    });
}

export default {
  getPassportData,
};
