import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { CSVLink } from 'react-csv';
import { HEADERS_FOR_DOWNLOADING_CSV } from 'common/constants';

import { StyledButtons, StyledIcon } from './styles';

class HandlingCSVButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.downloadCSVLink = React.createRef();
  }

  handleUploadBtnClick = () => {
    const { openUploadModal } = this.props;

    openUploadModal();
  };

  handleDownloadClick = () => {
    this.downloadCSVLink.current.link.click();
  };

  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        <StyledButtons>
          <Button
            size="large"
            type="primary"
            onClick={this.handleUploadBtnClick}
          >
            Upload CSV
            <StyledIcon>
              <FontAwesomeIcon icon={faUpload} />
            </StyledIcon>
          </Button>
          <Button
            size="large"
            type="primary"
            onClick={this.handleDownloadClick}
          >
            Download CSV
            <StyledIcon>
              <FontAwesomeIcon icon={faDownload} />
            </StyledIcon>
          </Button>
        </StyledButtons>
        <CSVLink
          ref={this.downloadCSVLink}
          data={items}
          filename="my-passwords.csv"
          headers={HEADERS_FOR_DOWNLOADING_CSV}
          className="btn btn-primary"
        />
      </React.Fragment>
    );
  }
}

HandlingCSVButtons.propTypes = {
  openUploadModal: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
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
};

export default HandlingCSVButtons;
