import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { SellUserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';





const useStyles = makeStyles({
    helperText: {
        color: "red"
    }


    
})



const Credit = () => {

    const [sellUserInfo, setSellUserInfo] = useContext(SellUserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){

            setSellUserInfo({...sellUserInfo, ...data})
            history.push("/transaction");
            
        } 
            
    }



    const classes = useStyles();
    return (
        <div>
            <Dashboard>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        inputRef={register({
                            required: "IBAN Account is required",
                        })}
                        id="ibnAccount"
                        name="ibnAccount"
                        label="Enter your IBAN Account details to be credited"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        FormHelperTextProps={{
                            className: classes.helperText,
                        }}
                        helperText={errors.ibnAccount && errors.ibnAccount.message}

                    />
                    
                   
                    <Link style={{textAlign: "center", margin: "150px 0", display: "block", color: "blue", fontSize: "20px"}} to="/wallet">Where can I find my IBAN?</Link>

                    <Button type="submit" fullWidth variant="contained">Next</Button>
                </form>
            </Dashboard>
        </div>
    );
};

export default Credit;