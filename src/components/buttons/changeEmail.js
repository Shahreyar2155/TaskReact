import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {logout} from "../../actions/auth";
import ChangeEmail from "../layouts/changeEmail"
import axios from "axios";



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


class CEmail extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open:true})
    };

    handleClose =() => {
        this.setState({open:false})
    };

    changeEmail = (email) =>{

        axios.post("/api/editOperations", {
            currentEmail:localStorage.email,
            email: email
        }).catch(error => console.log(error));


        this.props.logout();


    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>

                <Grid container justify="center" className={classes.root}>
                    <Grid item>
                        <Button variant="contained" className={classes.button} color="secondary" onClick={this.handleOpen}>
                            Change email
                        </Button>
                    </Grid>
                </Grid>


                <ChangeEmail open={this.state.open} handleClose={this.handleClose} changeEmail={this.changeEmail}/>

            </Fragment>
        );
    }
}







export default connect(null, {logout})(withStyles(styles)(CEmail));