import { Box, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';



const SecretSection = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();


    const handleClick = () => {

        history.push("/finalbuy")
    }
      

    console.log(userInfo);
    return (
        <>
            <Dashboard>
                <Box>
                    <h3 style={{margin: "50px 0"}}>Transfer funds to the following account</h3>
                    <h2>IBAN: ABCDEFGH123456789</h2>
                    <h2>Swap Id: ({ Math.ceil( Math.random() * 12345678) })</h2>

                    <p style={{margin: "30px 0", fontSize: "20px"}}>As soon as the funds are received the transaction to your BSC Wallet will be made the following address</p>
                    <p style={{fontSize: "20px"}}>{`{ ${userInfo.bscWallet} }`}</p>

                    <Link style={{textAlign: "center", margin: "50px 0", display: "block", color: "blue", fontSize: "20px"}} to="/wallet">Doubts? Discord's or Telegram</Link>

                    <Button onClick={handleClick} type="submit" fullWidth variant="contained">Next</Button>
                </Box>
            </Dashboard>
        </>
    );
};

export default SecretSection;