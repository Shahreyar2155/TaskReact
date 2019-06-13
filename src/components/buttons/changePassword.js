import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import ChangePassword from '../layouts/changePassword';
import axios from 'axios';

const styles = theme => ({
  root: {
    marginTop: 50,
    marginBottom: 50
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
});

class CPassword extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changePassword = password => {
    axios
      .post('/api/editOperations/changePassword', { // avoid using case sensitive paths.
        currentEmail: localStorage.email,
        password: password
      })
      .catch(error => console.log(error));

    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container justify="center" className={classes.root}>
          <Grid item>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              onClick={this.handleOpen}
            >
              Change password
            </Button>
          </Grid>
        </Grid>

        <ChangePassword
          open={this.state.open}
          handleClose={this.handleClose}
          changePassword={this.changePassword}
        />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(withStyles(styles)(CPassword));
