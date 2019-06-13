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

class ChnageEmail extends Component {
  state = {
    email: ''
  };

  dataChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeEmail = () => {
    if (this.validate(this.state.email)) this.setState({ error: true });
    else this.props.changeEmail(this.state.email);
  };

  validate = email => {
    this.setState({ error: false });

    if (!Validator.isEmail(email)) {
      return true;
    }

    return false;
  };

  render() {
    const { classes } = this.props;
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
                <DialogTitle id="form-dialog-title">Change Email</DialogTitle>
              </Grid>
            </Grid>

            <DialogContent>
              <DialogContentText>
                You can change your email if you want from here.
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
                value={this.state.email}
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
                onClick={this.changeEmail}
                color="primary"
                style={{ color: '#80D144' }}
              >
                Change
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ChnageEmail);
