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
      <React.Fragment>
        <PasswordForm
          title="Add password"
          submitAction={this.submitPasswordForm}
        />
      </React.Fragment>
    );
  }
}

AddPage.propTypes = {
  addPasswordItem: PropTypes.func.isRequired,
};

export default AddPage;
