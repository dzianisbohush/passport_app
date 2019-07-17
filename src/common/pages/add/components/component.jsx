import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PasswordForm from 'common/blocks/PasswordForm';

class AddPage extends PureComponent {
  submitPasswordForm = values => {
    // eslint-disable-next-line no-unused-vars,react/prop-types
    const { addPasswordItem, userEmail, history } = this.props;
    addPasswordItem(values, userEmail);
    // eslint-disable-next-line react/prop-types
    history.goBack();
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
