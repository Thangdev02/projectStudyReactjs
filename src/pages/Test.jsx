import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const chuyentrangdumtao = useNavigate();
    //named function
    function Login(){
        if(username === 'myAccount' && password === '1234'){
            alert('Login thanh cong');
            chuyentrangdumtao('/home')
        }
        else{
            alert('Login that bai');
        }
    }   
    
    //de khi nguoi dung nhap vo input username thi no luu vao day
    return (
        <div>
            <form>
                <h1>Login Form</h1>
                <div>
                    <TextField  onChange={(event) => setUsername(event.target.value)} id="outlined-basic" label="Username" variant="outlined" />
                </div>
                <div>
                    <TextField onChange={(event) => setPassword(event.target.value) }  id="outlined-basic" label="Password" variant="outlined" type='password' />
                </div>
                <Button onClick={Login} variant="contained">Login</Button>

            </form>
            <h1>Username: {username}</h1>
            <h1>Password: {password}</h1>

        </div>
    );
};

export default Test;