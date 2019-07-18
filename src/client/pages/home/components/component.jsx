import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Modal } from 'antd';
import { ThemeProvider } from 'styled-components';

import { PROFILE_EDIT, PROFILE_ADD } from 'constants/client/routes';
import { homePageTheme } from 'constants/client/themes';
import DeleteModal from 'client/blocks/DeleteModal';
import ShareModal from './ShareModal';
import HandlingCSVButtons from './HandlingCSVButtons';
import UploadFileModal from './UploadFileModal';
import TableBlock from './TableBlock';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShareModalVisible: false,
      isDeleteModalVisible: false,
      isFileUploadModalVisible: false,
      isActiveShareBtn: false,
      itemIdToDelete: null,
      passwordsToShare: [],
    };
  }

  componentDidMount() {
    const {
      getPasswordsItems,
      getUsersForSharing,
      location: { search },
    } = this.props;
    const { email: userEmail } = queryString.parse(search);

    if (userEmail) {
      getPasswordsItems(userEmail);
      localStorage.setItem('email', userEmail);
    } else {
      const userEmailFromLS = localStorage.getItem('email');
      getPasswordsItems(userEmailFromLS);
    }

    getUsersForSharing();
  }

  goToEditPage = id => {
    const { history } = this.props;

    history.push(`${PROFILE_EDIT}/${id}`);
  };

  goToAddPage = () => {
    const { history } = this.props;

    history.push(PROFILE_ADD);
  };

  handleDeleteModalSubmit = () => {
    const { deletePasswordItem } = this.props;
    const { itemIdToDelete } = this.state;
    this.setState({
      isDeleteModalVisible: false,
      itemIdToDelete: null,
    });
    deletePasswordItem(itemIdToDelete);
  };

  handleDeleteClick = e => {
    e.preventDefault();
    const { id } = e.target.dataset;
    this.setState({
      isDeleteModalVisible: true,
      itemIdToDelete: id,
    });
  };

  handleDeleteModalDismiss = () => {
    this.setState({
      isDeleteModalVisible: false,
    });
  };

  handleUploadFileButtonClick = () => {
    this.setState({
      isFileUploadModalVisible: true,
    });
  };

  handleUploadFileModalCloseButtonClick = () => {
    this.setState({
      isFileUploadModalVisible: false,
    });
  };

  handleRowSelected = (row, isSelected) => {
    const { passwordsToShare } = this.state;
    if (isSelected) {
      this.setState({
        isActiveShareBtn: true,
        passwordsToShare: [...passwordsToShare, row],
      });
    } else {
      const index = passwordsToShare.findIndex(elem => elem.id === row.id);
      passwordsToShare.splice(index, 1);
      this.setState({
        isActiveShareBtn: false,
        passwordsToShare,
      });
    }
  };

  handleAllRowsSelected = (isSelected, rows) => {
    if (isSelected) {
      this.setState({
        isActiveShareBtn: true,
        passwordsToShare: rows,
      });
    } else {
      this.setState({
        isActiveShareBtn: false,
        passwordsToShare: [],
      });
    }
  };

  handleShareButtonClick = () => {
    const { usersForSharing } = this.props;

    if (!usersForSharing.length) {
      Modal.error({ title: 'Data base does not contain users for sharing' });

      return;
    }

    this.setState({
      isShareModalVisible: true,
    });
  };

  handleShareModalCloseButtonClick = () => {
    this.setState({
      isShareModalVisible: false,
    });
  };

  render() {
    const {
      isShareModalVisible,
      isDeleteModalVisible,
      isFileUploadModalVisible,
      isActiveShareBtn,
      passwordsToShare,
    } = this.state;
    const {
      loading,
      passwordsItems,
      userEmail,
      usersForSharing,
      sharePasswords,
      uploadPasswordsInCSV,
    } = this.props;

    return (
      <ThemeProvider theme={homePageTheme}>
        <div>
          <TableBlock
            loading={loading}
            userEmail={userEmail}
            items={passwordsItems}
            goToEditPage={this.goToEditPage}
            goToAddPage={this.goToAddPage}
            handleShareButtonClick={this.handleShareButtonClick}
            handleRowSelected={this.handleRowSelected}
            handleAllRowsSelected={this.handleAllRowsSelected}
            handleDeleteClick={this.handleDeleteClick}
            isActiveShareBtn={isActiveShareBtn}
          />
          <HandlingCSVButtons
            goToAddPage={this.goToAddPage}
            openUploadModal={this.handleUploadFileButtonClick}
            items={passwordsItems}
          />
          <DeleteModal
            isVisible={isDeleteModalVisible}
            handleDeleteModalSubmit={this.handleDeleteModalSubmit}
            handleDeleteModalDismiss={this.handleDeleteModalDismiss}
          />
          <ShareModal
            visible={isShareModalVisible}
            users={usersForSharing}
            userEmail={userEmail}
            closeModal={this.handleShareModalCloseButtonClick}
            passwordsToShare={passwordsToShare}
            sharePasswords={sharePasswords}
          />
          <UploadFileModal
            visible={isFileUploadModalVisible}
            closeModal={this.handleUploadFileModalCloseButtonClick}
            userEmail={userEmail}
            uploadPasswordsInCSV={uploadPasswordsInCSV}
          />
        </div>
      </ThemeProvider>
    );
  }
}

Home.defaultProps = {
  userEmail: '',
  usersForSharing: [],
};

Home.propTypes = {
  getPasswordsItems: PropTypes.func.isRequired,
  deletePasswordItem: PropTypes.func.isRequired,
  getUsersForSharing: PropTypes.func.isRequired,
  sharePasswords: PropTypes.func.isRequired,
  uploadPasswordsInCSV: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
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
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  userEmail: PropTypes.string,
  usersForSharing: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
    }),
  ),
};

export default Home;
