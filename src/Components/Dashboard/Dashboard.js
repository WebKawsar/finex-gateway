import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';




const useStyles = makeStyles({
    root: {
        border: "50px solid grey",
        height: "100vh",
    },
    paper: {
        padding: "30px",
        boxShadow: "10px 10px 40px grey"
    },
    FormControl: {
        width: "100%"
    },
    helperText: {
        color: "red"
    },
    select: {
        width: "100%",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "5px",
        fontSize: "18px"
    }



    
})

const Dashboard = (props) => {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                        {""}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.paper}>
                            {props.children}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Dashboard;