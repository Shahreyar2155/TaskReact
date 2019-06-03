import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";



const styles = theme => ({
    root: {
        marginTop: 50,
        marginBottom: 50
    },


});


class Header extends Component {
    state = {
    };


    render() {
        const {classes} = this.props;
        return (
            <Fragment>



                <Grid container justify="center" className={classes.root}>
                    <Grid item>
                        <Typography component="h1" variant="display1" gutterBottom>
                            Welcome to Task
                        </Typography>
                    </Grid>
                </Grid>



            </Fragment>
        );
    }
}


export default withStyles(styles)(Header);