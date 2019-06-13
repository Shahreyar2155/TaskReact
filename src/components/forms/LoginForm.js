import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Validator from 'validator';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: 10,
    marginBottom: 5
  },

  root1: {
    padding: theme.spacing(3, 2)
  }
});

class LoginForm extends Component {
  state = {
    data: { email: '', password: '' }
  };

  dataChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  login = () => {
    if (this.validate(this.state.data)) this.setState({ error: true });
    else
      this.props
        .login(this.state.data)
        .catch(err => this.setState({ error: true }));
  };

  validate = data => {
    this.setState({ error: false });

    if (!data.password) {
      return true;
    }
    if (!Validator.isEmail(data.email)) {
      return true;
    }

    return false;
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <Fragment>
        {/*dialogue box starts from here*/}

        <div>
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <Grid container justify="center" className={classes.root}>
              <Grid item>
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
              </Grid>
            </Grid>

            <DialogContent>
              <DialogContentText>
                Enter your email and password to login for task
              </DialogContentText>

              {this.state.error && (
                <div>
                  <Paper className={classes.root1}>
                    <Grid container justify="center" className={classes.root}>
                      <Grid item>
                        <Typography variant="h5" component="h3">
                          Invalid entries
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              )}

              <TextField
                id="outlined-email-input"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                margin="normal"
                variant="outlined"
                onChange={this.dataChange}
                fullWidth
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                type="password"
                value={data.password}
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={this.dataChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.props.handleClose}
                color="primary"
                style={{ color: '#FF1329' }}
              >
                Cancel
              </Button>
              <Button
                onClick={this.login}
                color="primary"
                style={{ color: '#80D144' }}
              >
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
