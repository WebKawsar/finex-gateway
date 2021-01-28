import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';





const FinalSell = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [data, setData] = useState({});

    useEffect(() => {

        if(data){

            fetch('http://localhost:8080/sells', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(result => console.log(result))
        }
        

    }, [data])

    const handleSubmit = () => {
        setData(userInfo.sells);
    }
    

    return (
        <>
            <Dashboard>
                <p style={{margin: "30px 0", fontSize: "20px", fontWeght: "bold", color: "black"}}>Congratulations you have made it successfully. Remember your International TRXid. If you need any help customer support will ask for it.</p>
                <h1>{userInfo?.sells?.trxId}</h1>
                <p style={{margin: "30px 0"}}>ID X, qtt token, Token, timestamp</p>

                <Button onClick={handleSubmit} type="submit" style={{marginTop: "50px"}} fullWidth variant="contained">I've stored the ID & I'm DOne</Button>
            </Dashboard>  
        </>
    );
};

export default FinalSell;