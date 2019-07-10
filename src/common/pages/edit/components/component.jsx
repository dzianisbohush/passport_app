import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import PasswordForm from 'common/blocks/PasswordForm';

class EditPage extends PureComponent {
  state = {
    name: '',
    resourceAddress: '',
    login: '',
    itemId: null,
  };

  componentDidMount() {
    const {
      passwordsItems,
      match: {
        params: { id: itemId },
      },
    } = this.props;

    const editingPassword = passwordsItems.find(
      item => item.id.toString() === itemId,
    );
    const { name, resourceAddress, login, id } = editingPassword;

    this.setState({
      itemId: id,
      name,
      resourceAddress,
      login,
    });
  }

  submitPasswordForm = values => {
    const { changePasswordItem } = this.props;
    const { itemId } = this.state;

    changePasswordItem({ ...values, id: itemId });
  };

  render() {
    const { name, resourceAddress, login } = this.state;

    return (
      <PasswordForm
        name={name}
        login={login}
        title="Create Password"
        resourceAddress={resourceAddress}
        submitAction={this.submitPasswordForm}
      />
    );
  }
}

EditPage.propTypes = {
  changePasswordItem: PropTypes.func.isRequired,
  passwordsItems: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      id: PropTypes.number,
      login: PropTypes.string,
      name: PropTypes.string,
      password: PropTypes.string,
      resourceAddress: PropTypes.string,
      sendNotificationAt: PropTypes.string,
      updatedAt: PropTypes.string,
      userId: PropTypes.number,
    }),
  ).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default EditPage;
