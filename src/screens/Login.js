import React from 'react';
import {TextField, Button, Container} from '@material-ui/core'

const Login = () => {
    return (
        <div>
            <Container>
            <form>
            <TextField  label="Login" variant="outlined" /><br/>
            <TextField type="password"  label="Senha" variant="outlined" /><br/>
            <Button  variant="contained" color="secondary">
            Login
            </Button>

            </form>
            </Container>
        </div>
    );
};

export default Login;