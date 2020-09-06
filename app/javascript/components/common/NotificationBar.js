import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';

const NotificationBar = (props) => {
  const { open, handleClose, message, notificationBarOpen, severity } = props;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={notificationBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      >
        <Alert onClose={handleClose} severity={severity}>{ message }</Alert>
      </Snackbar>
    </div>
  );
};

NotificationBar.defaultProps = {
  severity: 'error'
};

export default NotificationBar;
