import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
        height: "100vh",
        backgroundColor: "grey"
    },
   



    
})

const Home = (props) => {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                   <Grid item xs={12} sm={12} md={12}>
                        <Box>
                            <h1 style={{textAlign: "center", color: "white", padding: "30px 0"}}>Stablecoin gateway</h1>
                            <Paper style={{height: "75vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                                <h2><Link to="/buy">BUY</Link></h2>
                                <h2><Link to="/sell">SELL</Link></h2>
                            </Paper>
                            <p style={{textAlign: "center", fontSize: "20px", padding: "15px 0"}}>Developed by <a target="_blank" rel="noreferrer" href="http://kawsar-ahmed.web.app">Kawsar Ahmed</a></p>
                        </Box>
                   </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;