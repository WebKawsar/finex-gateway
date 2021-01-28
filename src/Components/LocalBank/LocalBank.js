import { Button, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Dashboard from '../Dashboard/Dashboard';


const useStyles = makeStyles({
    select: {
        width: "100%",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "5px",
        fontSize: "18px"
    }


    
})

const banks = [
    {
        id: 101,
        name: "Local Bank-1",
    },
    {
        id: 102,
        name: "Local Bank-2",
    },
    {
        id: 103,
        name: "Local Bank-3",
    },
    {
        id: 104,
        name: "Local Bank-4",
    },
    {
        id: 105,
        name: "Local Bank-5",
    },
    

]

const LocalBank = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        if(data){

            setUserInfo({...userInfo, ...data})
            history.push("/secret")
        }
    }


  

    const classes = useStyles();
    return (
        <>
            <Dashboard>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                        className={classes.select}
                        name="localBank"
                        
                        ref={register({
                            required: "Please select your local bank",
                        })}
                    >
                        <option value="">Select your Local Bank</option>
                        {
                            banks.map((bank, index) => <option style={{padding: "10px", backgroundColor: "grey"}} key={index} value={bank.name}>{bank.name}</option>)
                        }
                    </select>
                    {
                        errors.localBank && <p style={{color: "red", margin: "0"}}>{errors.localBank.message}</p>
                    }

                    
                    <p style={{margin: "50px 0"}}>Transfers between banks are usually faster. If available give preference to your local bank and the system will automatically  find the best P2P for you.</p>
                    <Link style={{textAlign: "center", margin: "50px 0", display: "block", color: "blue", fontSize: "20px"}} to="/wallet">How long does's it usually takes?</Link>

                    <Button type="submit" fullWidth variant="contained">Next</Button>
                </form>
            </Dashboard> 
        </>
    );
};

export default LocalBank;