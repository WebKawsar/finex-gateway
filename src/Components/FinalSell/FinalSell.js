import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { SellUserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';





const FinalSell = () => {
    const [sellUserInfo, setSellUserInfo] = useContext(SellUserContext);

    console.log(sellUserInfo);

    return (
        <>
            <Dashboard>
                <p style={{margin: "30px 0", fontSize: "20px", fontWeght: "bold", color: "black"}}>Congratulations you have made it successfully. Remember your International TRXid. If you need any help customer support will ask for it.</p>
                <h1>{sellUserInfo.trxId}</h1>
                <p style={{margin: "30px 0"}}>ID X, qtt token, Token, timestamp</p>

                <Button type="submit" style={{marginTop: "50px"}} fullWidth variant="contained">I've stored the ID & I'm DOne</Button>
            </Dashboard>  
        </>
    );
};

export default FinalSell;