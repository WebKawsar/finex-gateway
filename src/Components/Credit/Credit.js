import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';





const useStyles = makeStyles({
    helperText: {
        color: "red"
    }


    
})



const Credit = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){

            const newData = {...userInfo.sells, ...data}
            setUserInfo({...userInfo, sells: newData})
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