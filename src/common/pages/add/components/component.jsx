import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PasswordForm from 'common/blocks/PasswordForm';

class AddPage extends PureComponent {
  submitPasswordForm = values => {
    const { addPasswordItem, userEmail } = this.props;

    addPasswordItem(values, userEmail);
  };

  render() {
    return (
      <PasswordForm
        title="Add password"
        submitAction={this.submitPasswordForm}
      />
    );
  }
}

AddPage.propTypes = {
  addPasswordItem: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default AddPage;
