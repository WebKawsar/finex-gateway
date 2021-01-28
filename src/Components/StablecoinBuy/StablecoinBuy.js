import { Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Dashboard from '../../Components/Dashboard/Dashboard';




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

const StablecoinBuy = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {

        axios.get("https://restcountries.eu/rest/v2/all")
        .then(result => {

            setCurrencies(result.data)
        })


    }, [])

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){
        
            setUserInfo(data)
            history.push("/wallet")
        }
    }

    


    const classes = useStyles();
    return (
        <>
            <Dashboard>
                <h1 style={{margin: "30px 0", textAlign: "center"}}>Stablecoin gateway - BUY</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                        className={classes.select}
                        name="coin"
                        
                        ref={register({
                            required: "Please select your coin",
                        })}
                    >
                        <option value="">Select your coin</option>
                        {
                            currencies.map((currency, index) => <option style={{padding: "10px", backgroundColor: "grey"}} key={index} value={currency?.currencies[0]?.code}>{currency?.currencies[0]?.name} - {currency?.currencies[0]?.code}</option>)
                        }
                    </select>
                    {
                        errors.coin && <p style={{color: "red", margin: "0"}}>{errors.coin.message}</p>
                    }

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
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.quantity && errors.quantity.message}
                    />
                    <p style={{margin: "50px 0"}}>Total cost @price AOA/TAOA</p>
                    
                    <Button type="submit" fullWidth variant="contained">Next</Button>
                </form>
            </Dashboard>
        </>
    );
};

export default StablecoinBuy;