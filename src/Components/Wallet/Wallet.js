import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';


const useStyles = makeStyles({
    helperText: {
        color: "red"
    }
})


const Wallet = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        const valid = WAValidator.validate(data.bscWallet, 'bitcoin');
        if(valid){
            
            const newData = {...userInfo.buys, ...data}
            setUserInfo({...userInfo, buys: newData})
            alert('WOW! this is a valid address');
            history.push("/local");
            
        } else{
            
            alert('Invalid Address. Please write correct address');
        }
            
    }

  

    const classes = useStyles();
    return (
        <>
            <Dashboard>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        inputRef={register({
                            required: "BSC Wallet is required",
                        })}
                        id="bscWallet"
                        name="bscWallet"
                        label="Enter tour BSC Wallet Address"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.bscWallet && errors.bscWallet.message}

                    />
                    <p style={{margin: "10px 0"}}>You will receive your TAOA in this address</p>
                    <p style={{color: "red", margin: "30px 0", fontSize: "20px", fontWeght: "bold"}}>Pay close attension mistakes will make you loose all your assests and there is nothing we can do to help</p>
                    
                    <Link style={{textAlign: "center", margin: "50px 0", display: "block", color: "blue", fontSize: "20px"}} to="/wallet">Dont't have a BSC Wallet yet?</Link>

                    <Button type="submit" fullWidth variant="contained">Next</Button>
                </form>
            </Dashboard> 
        </>
    );
};

export default Wallet;