import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

import './Login.css'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});
class Login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="login_form">
                <Paper className="paper">
                    <div className={classes.margin}>
                        <Grid container spacing={5} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={5} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField id="username" label="Password" type="password" fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox
                                        color="primary"
                                    />
                                } label="Remember me" />
                            </Grid>
                            <Grid item>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Link to="/">
                            <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                            </Link>
                        </Grid>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Login);