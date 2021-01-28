import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';




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


const allTokens = [
    {
        id: 101,
        name: "Token-1"
    },
    {
        id: 102,
        name: "Token-2"
    },
    {
        id: 103,
        name: "Token-3"
    },
    {
        id: 104,
        name: "Token-4"
    },
    {
        id: 105,
        name: "Token-5"
    },
    
]

const StablecoinSell = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [tokens, setTokens] = useState(allTokens);


    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){
        
            setUserInfo({...userInfo, sells:data})
            history.push("/sellwallet")
        }
    }

    


    const classes = useStyles();
    return (
        <>
            <Dashboard>
                <h1 style={{margin: "30px 0", textAlign: "center"}}>Stablecoin gateway - Sell</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                        className={classes.select}
                        name="token"
                        
                        ref={register({
                            required: "Please select your Token",
                        })}
                    >
                        <option value="">Choose a Token</option>
                        {
                            tokens.map((token, index) => <option style={{padding: "10px", backgroundColor: "grey"}} key={index} value={token.name}>{token.name}</option>)
                        }
                    </select>
                    {
                        errors.token && <p style={{color: "red", margin: "0"}}>{errors.token.message}</p>
                    }
                    <br/>

                    <TextField
                        inputRef={register({
                            required: "Quantity is required",
                        })}
                        margin="normal"
                        fullWidth
                        defaultValue=""
                        id="quantity"
                        type="Number"
                        label="Quantity"
                        name="quantity"
                        variant="outlined"
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.quantity && errors.quantity.message}
                    />
                    <p style={{margin: "50px 0"}}>You will get X AOA @preco TAOA/AOA</p>
                    
                    <Button type="submit" fullWidth variant="contained">Sell Now</Button>
                </form>
            </Dashboard>
        </>
    );
};

export default StablecoinSell;