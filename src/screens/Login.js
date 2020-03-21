import React from 'react';
import {TextField, Button,Container} from '@material-ui/core'
import {Link} from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <Container>
            <form>
            <TextField  label="Login" variant="outlined" /><br/>
            <TextField type="password"  label="Senha" variant="outlined" /><br/>
            <Link to={'/receitas'}>
            <Button  variant="contained" color="secondary">
            Login
            </Button>
            </Link>
            </form>
            </Container>
        </div>
    );
};

export default Login;