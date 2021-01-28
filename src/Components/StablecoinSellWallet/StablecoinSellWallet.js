import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";
import { SellUserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';





const useStyles = makeStyles({
    helperText: {
        color: "red"
    }


    
})


const StablecoinSellWallet = () => {
    const [sellUserInfo, setSellUserInfo] = useContext(SellUserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        const valid = WAValidator.validate(data.bscWallet, 'bitcoin');
        if(valid){

            setSellUserInfo({...sellUserInfo, ...data})
            alert('WOW! Great, this is a valid address');
            history.push("/credit");
            
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
                        label="BSC Wallet Address"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.bscWallet && errors.bscWallet.message}

                    />
                    
                    <p style={{margin: "30px 0", fontSize: "20px", fontWeght: "bold", color: "black"}}>If for some reason we can not proceed with your sell (which is rare) we will completely return your assets. Please provide a valid BSC wallet address that you have access to. Pay close attention to not input any incorrect information.</p>
                    
                    <Link style={{textAlign: "center", margin: "50px 0", display: "block", color: "blue", fontSize: "20px"}} to="/wallet">Dont't have a BSC Wallet Address?</Link>

                    <Button type="submit" fullWidth variant="contained">Next</Button>
                </form>
            </Dashboard> 
        </>
    );
};

export default StablecoinSellWallet;