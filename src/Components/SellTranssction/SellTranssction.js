import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { SellUserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';






const useStyles = makeStyles({
    helperText: {
        color: "red"
    },
    submit: {
        marginTop: "100px"
    }


    
})



const SellTranssction = () => {


    const [sellUserInfo, setSellUserInfo] = useContext(SellUserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){

            setSellUserInfo({...sellUserInfo, ...data})
            history.push("/finallSell");
            
        } 
            
    }

    const classes = useStyles();
    return (
        <div>
            <Dashboard>

                <p style={{margin: "30px 0", fontSize: "20px", fontWeght: "bold", color: "black"}}>Transfer your Tokens ( TAOA ) to the following BSC (Binance Smart Chain) adress and enter the resultina TXid</p>
                <p style={{fontSize: "20px", fontWeight: "bold", color: "black", margin: "30px 0"}}>{`{ ${sellUserInfo?.bscWallet} }`}</p>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <TextField
                        inputRef={register({
                            required: "TRXid is required",
                        })}
                        id="trxId"
                        name="trxId"
                        label="TXid (Manadatory Info)"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.trxId && errors.trxId.message}

                    />
                    
                    
                   
                    <Button className={classes.submit} type="submit" fullWidth variant="contained">Done</Button>
                </form>
            </Dashboard>
        </div>
    );
};

export default SellTranssction;