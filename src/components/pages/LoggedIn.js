import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Logout from '../buttons/logout';
import ChangeEmail from '../buttons/changeEmail';
import ChangePassword from '../buttons/changePassword';
import Grid from '@material-ui/core/Grid';

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

class LoggedIn extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Grid container justify="center">
          <Grid item>
            <h1>You're logged in</h1>
          </Grid>
        </Grid>

        <ChangeEmail />
        <ChangePassword />

        <Logout />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(withStyles(styles)(LoggedIn));
