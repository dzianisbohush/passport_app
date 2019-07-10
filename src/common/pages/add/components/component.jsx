import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PasswordForm from 'common/blocks/PasswordForm';

class AddPage extends PureComponent {
  submitPasswordForm = values => {
    const { addPasswordItem } = this.props;

    addPasswordItem(values);
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
};

export default AddPage;
