import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';




const useStyles = makeStyles({
    root: {
        border: "50px solid grey",
        height: "100vh",
    },
    paper: {
        padding: "30px",
        boxShadow: "10px 10px 40px grey"
    },
    



    
})

const FinalBuy = (props) => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    useEffect(() => {

        if(userInfo){
            
            fetch('http://localhost:8080/pruchase', {
                method: 'POST',
                body: JSON.stringify(userInfo.buys),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(result => console.log(result))
        }
        

    }, [userInfo])

    
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper className={classes.paper}>
                            <h1 style={{textAlign: "center", marginTop: "100px"}}>Thanks for BUY</h1>
                            <h3 style={{textAlign: "center", marginTop: "50px"}}><Link to="/">Go to Home</Link></h3>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinalBuy;