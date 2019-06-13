import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../layouts/header';
import SignUp from '../forms/SignUpForm';
import Login from '../forms/LoginForm';
import { signup } from '../../actions/users';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

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

class Homepage extends Component {
  state = {
    open: false,
    openLogin: false
  };

  openSignUp = () => {
    this.setState({ open: true });
  };

  openLogin = () => {
    this.setState({ openLogin: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  closeLogin = () => {
    this.setState({ openLogin: false });
  };

  submit = data => this.props.signup(data);

  login = data =>
    this.props.login(data).then(() => this.props.history.push('/LoggedIn'));

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Header />

        <Grid container justify="center" className={classes.root}>
          <Grid item>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              onClick={this.openSignUp}
            >
              Sign Up
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={this.openLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>

        <SignUp
          open={this.state.open}
          handleClose={this.handleClose.bind(this)}
          submit={this.submit}
        />

        <Login
          open={this.state.openLogin}
          handleClose={this.closeLogin}
          login={this.login}
        />
      </Fragment>
    );
  }
}

Homepage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup, login }
)(withStyles(styles)(Homepage));
