import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {logout} from "../../actions/auth";


const styles = theme => ({
    root: {
        marginTop: 50,
        marginBottom: 50
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },

});


class Logout extends Component {
    state = {
    };


    render() {
        const {classes} = this.props;
        return (
            <Fragment>

                <Grid container justify="center" className={classes.root}>
                    <Grid item>
                        <Button variant="contained" className={classes.button} color="secondary" onClick={() => this.props.logout()} >
                            Log out
                        </Button>
                    </Grid>
                </Grid>


            </Fragment>
        );
    }
}






export default connect(null, {logout})(withStyles(styles)(Logout));